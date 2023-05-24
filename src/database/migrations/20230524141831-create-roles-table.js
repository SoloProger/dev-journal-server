'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('roles', {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {type: Sequelize.DataTypes.STRING, allowNull: false},
            created_at: {
                allowNull: false,
                type: Sequelize.DataTypes.DATE,
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DataTypes.DATE,
            },
        });

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.dropTable('roles');
    }
};
