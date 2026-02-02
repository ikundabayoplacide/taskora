'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('healthAndDrivingLicenses', {
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
      healthStatus: {
        type: Sequelize.STRING,
        allowNull: false
      },
      healthDetails: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      drivingLicenseStatus: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      drivingExperienceYears: {
        type: Sequelize.STRING,
        allowNull: true
      },
      drivingLicense: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      drivingLicenseDetails: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      drivingLicenseType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      drivingLicenseUrl: {
        type: Sequelize.STRING,
        allowNull: false
      },
      drivingNotes: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('healthAndDrivingLicenses');
  }
};