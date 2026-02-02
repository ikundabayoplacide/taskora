'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    const userIds = [uuidv4(), uuidv4()];
    
    await queryInterface.bulkInsert('other_person_profiles', [
      {
        id: uuidv4(),
        userId: userIds[0],
        otherPersonalName: 'Mary Doe',
        otherPersonalId: '1199770123456789',
        otherPersonalPhone: '+250788111222',
        otherPersonalEmail: 'mary.doe@example.com',
        otherPersonalNationality: 'Rwandan',
        otherPersonalRelation: 'Mother',
        otherPersonalPhoto: 'https://example.com/mary.jpg',
        otherPersonalAge: 50,
        otherPersonalGender: 'Female',
        otherPersonalOccupation: 'Teacher',
        otherPersonalEmergency: true,
        otherPersonalNotes: 'Emergency contact',
        otherPersonalIdPhoto: 'https://example.com/mary-id.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        userId: userIds[1],
        otherPersonalName: 'Robert Smith',
        otherPersonalId: '1199760987654321',
        otherPersonalPhone: '+250788333444',
        otherPersonalEmail: 'robert.smith@example.com',
        otherPersonalNationality: 'Rwandan',
        otherPersonalRelation: 'Father',
        otherPersonalPhoto: 'https://example.com/robert.jpg',
        otherPersonalAge: 55,
        otherPersonalGender: 'Male',
        otherPersonalOccupation: 'Engineer',
        otherPersonalEmergency: true,
        otherPersonalNotes: 'Emergency contact and reference',
        otherPersonalIdPhoto: 'https://example.com/robert-id.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('other_person_profiles', null, {});
  }
};