'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('other_person_profiles', {
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
      otherPersonalName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      otherPersonalId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      otherPersonalPhone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      otherPersonalEmail: {
        type: Sequelize.STRING,
        allowNull: false
      },
      otherPersonalNationality: {
        type: Sequelize.STRING,
        allowNull: false
      },
      otherPersonalRelation: {
        type: Sequelize.STRING,
        allowNull: false
      },
      otherPersonalPhoto: {
        type: Sequelize.STRING,
        allowNull: false
      },
      otherPersonalAge: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      otherPersonalGender: {
        type: Sequelize.STRING,
        allowNull: false
      },
      otherPersonalOccupation: {
        type: Sequelize.STRING,
        allowNull: false
      },
      otherPersonalEmergency: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      otherPersonalNotes: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      otherPersonalIdPhoto: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('other_person_profiles');
  }
};