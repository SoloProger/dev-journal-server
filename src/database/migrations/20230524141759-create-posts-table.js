'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('posts', {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            title: {type: Sequelize.DataTypes.STRING, allowNull: false},
            description: {type: Sequelize.DataTypes.TEXT},
            category_id: {type: Sequelize.DataTypes.INTEGER},
            created_at: {
                allowNull: false,
                type: Sequelize.DataTypes.DATE,
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DataTypes.DATE,
            },
        })
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        await queryInterface.dropTable('posts');
    }
};
