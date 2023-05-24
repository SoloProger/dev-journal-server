import Role from "../models/role";
import User from "../models/user";

Role.hasMany(User);
User.belongsTo(Role);
