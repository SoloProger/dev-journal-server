import {DataTypes} from "sequelize";
import configDb from "../../core/db/db.config";

const Category = configDb.define(
    "Category",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {tableName: "categories"}
);

export default Category;