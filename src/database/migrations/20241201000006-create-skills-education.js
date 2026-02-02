'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('skills_and_education', {
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
      skills: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      skillsUrl: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true
      },
      skillsLevel: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true
      },
      skillsExperience: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true
      },
      educationYear: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      education: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      educationLevel: {
        type: Sequelize.STRING,
        allowNull: false
      },
      experienceLevel: {
        type: Sequelize.STRING,
        allowNull: false
      },
      educationUrl: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false
      },
      experienceYears: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      certifications: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      certificationsUrl: {
        type: Sequelize.ARRAY(Sequelize.STRING),
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
    await queryInterface.dropTable('skills_and_education');
  }
};