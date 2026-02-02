'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    const userIds = [uuidv4(), uuidv4()];
    
    await queryInterface.bulkInsert('availabilities', [
      {
        id: uuidv4(),
        userId: userIds[0],
        availabilityStatus: 'Available',
        availabilityNotes: 'Available for full-time work',
        availabilityDate: '2024-12-01',
        availabilityTime: '09:00-17:00',
        noticePeriod: '2 weeks',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        userId: userIds[1],
        availabilityStatus: 'Partially Available',
        availabilityNotes: 'Available weekends only',
        availabilityDate: '2024-12-02',
        availabilityTime: '10:00-16:00',
        noticePeriod: '1 week',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('availabilities', null, {});
  }
};