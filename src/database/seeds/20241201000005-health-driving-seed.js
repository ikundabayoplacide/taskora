'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    const userIds = [uuidv4(), uuidv4()];
    
    await queryInterface.bulkInsert('healthAndDrivingLicenses', [
      {
        id: uuidv4(),
        userId: userIds[0],
        healthStatus: 'Excellent',
        healthDetails: 'No medical conditions',
        drivingLicenseStatus: true,
        drivingExperienceYears: '5 years',
        drivingLicense: true,
        drivingLicenseDetails: 'Class B license',
        drivingLicenseType: 'B',
        drivingLicenseUrl: 'https://example.com/license1.pdf',
        drivingNotes: 'Clean driving record',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        userId: userIds[1],
        healthStatus: 'Good',
        healthDetails: 'Wears glasses for reading',
        drivingLicenseStatus: false,
        drivingExperienceYears: null,
        drivingLicense: false,
        drivingLicenseDetails: null,
        drivingLicenseType: 'None',
        drivingLicenseUrl: '',
        drivingNotes: 'Does not drive',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('healthAndDrivingLicenses', null, {});
  }
};