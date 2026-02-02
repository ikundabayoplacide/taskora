'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    const userIds = [uuidv4(), uuidv4()];
    
    await queryInterface.bulkInsert('locations', [
      {
        id: uuidv4(),
        userId: userIds[0],
        country: 'Rwanda',
        province: 'Kigali City',
        district: 'Gasabo',
        sector: 'Remera',
        cell: 'Rukiri I',
        village: 'Nyarutarama',
        latitude: -1.9441,
        longitude: 30.0619,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        userId: userIds[1],
        country: 'Rwanda',
        province: 'Kigali City',
        district: 'Nyarugenge',
        sector: 'Nyarugenge',
        cell: 'Rwampara',
        village: 'Kigali',
        latitude: -1.9706,
        longitude: 30.1044,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('locations', null, {});
  }
};