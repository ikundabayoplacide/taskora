'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('availabilities', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      availabilityStatus: {
        type: Sequelize.STRING,
        allowNull: false
      },
      availabilityNotes: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      availabilityDate: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      availabilityTime: {
        type: Sequelize.STRING,
        allowNull: true
      },
      noticePeriod: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('availabilities');
  }
};