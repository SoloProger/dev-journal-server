import Post from "../models/post";
import Category from "../models/Category";

Post.belongsToMany(Category, {through: 'post_category'});
Category.belongsToMany(Post, {through: 'post_category'});
