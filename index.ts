import * as dotenv from "dotenv";
dotenv.config();
import fastify from "fastify";
import fastifyCors = require("@fastify/cors");
import configDb from "./src/core/db/db.config";
import "./src/database/relationships/user-role";
import postRouter from "./src/handlers/post.router";
import roleRouter from "./src/handlers/role.router";
import userRouter from "./src/handlers/user.router";

const server = fastify({ logger: true });
const PORT = Number(process.env.PORT);

server.register(fastifyCors);

server.register((app, options, done) => postRouter(app, options, done));
server.register((app, options, done) => roleRouter(app, options, done));
server.register((app, options, done) => userRouter(app, options, done));

const start = async () => {
  try {
    await server.listen({ port: PORT });
    await configDb.authenticate();
    await configDb.sync();
    console.log(`Server start. http://localhost:${process.env.PORT}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
