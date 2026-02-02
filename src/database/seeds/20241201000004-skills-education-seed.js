'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    const userIds = [uuidv4(), uuidv4()];
    
    await queryInterface.bulkInsert('skills_and_education', [
      {
        id: uuidv4(),
        userId: userIds[0],
        skills: 'JavaScript, TypeScript, Node.js, React',
        skillsUrl: ['https://example.com/cert1.pdf'],
        skillsLevel: ['Advanced', 'Intermediate'],
        skillsExperience: ['3 years', '2 years'],
        educationYear: '2020',
        education: 'Bachelor of Computer Science',
        educationLevel: 'Bachelor',
        experienceLevel: 'Mid-level',
        educationUrl: ['https://example.com/degree1.pdf'],
        experienceYears: '3 years',
        certifications: 'AWS Certified Developer',
        certificationsUrl: ['https://example.com/aws-cert.pdf'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        userId: userIds[1],
        skills: 'UI/UX Design, Figma, Adobe Creative Suite',
        skillsUrl: ['https://example.com/portfolio.pdf'],
        skillsLevel: ['Expert', 'Advanced'],
        skillsExperience: ['5 years', '4 years'],
        educationYear: '2018',
        education: 'Bachelor of Fine Arts',
        educationLevel: 'Bachelor',
        experienceLevel: 'Senior',
        educationUrl: ['https://example.com/degree2.pdf'],
        experienceYears: '5 years',
        certifications: 'Google UX Design Certificate',
        certificationsUrl: ['https://example.com/google-cert.pdf'],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('skills_and_education', null, {});
  }
};