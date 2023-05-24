import Role from "../models/role";
import User from "../models/user";

User.hasOne(Role, {foreignKey: 'role_id'});
Role.belongsTo(User);
