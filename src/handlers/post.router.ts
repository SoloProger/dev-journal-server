import { PostController } from "../controllers/post.controller";
import { BaseHandler } from "../core/base/handler.base";
import { PATHS } from "../core/utils/paths";
import { BaseRepository } from "../core/base/repository.base";
import { Model } from "sequelize";
import { PostService } from "../services/post.service";
import createRoute from "../core/utils/createRoute";
import Post from "../database/models/post";

const router = (app: any) =>
  new BaseHandler(
    app,
    PATHS.POST_PATH,
    Post as unknown as Model,
    PostController,
    PostService,
    BaseRepository
  );

export default (app: any, options: any, done: any) =>
  createRoute({ app, options, done, router });
