'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    const userIds = [uuidv4(), uuidv4()];
    
    await queryInterface.bulkInsert('personal_profiles', [
      {
        id: uuidv4(),
        userId: userIds[0],
        fullName: 'John Doe',
        phoneNumber: '+250788123456',
        email: 'john.doe@example.com',
        nationality: 'Rwandan',
        nationalId: '1199780123456789',
        gender: 'Male',
        age: 25,
        photo: 'https://example.com/photo1.jpg',
        occupation: 'Software Developer',
        nationalIdPhoto: 'https://example.com/id1.jpg',
        otherPersonUserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        userId: userIds[1],
        fullName: 'Jane Smith',
        phoneNumber: '+250788654321',
        email: 'jane.smith@example.com',
        nationality: 'Rwandan',
        nationalId: '1199880987654321',
        gender: 'Female',
        age: 28,
        photo: 'https://example.com/photo2.jpg',
        occupation: 'Designer',
        nationalIdPhoto: 'https://example.com/id2.jpg',
        otherPersonUserId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('personal_profiles', null, {});
  }
};