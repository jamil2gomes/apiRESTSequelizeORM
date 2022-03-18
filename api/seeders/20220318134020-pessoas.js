'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Pessoas', [

    {
      nome: 'Clark Kent',
      ativo: true,
      email: 'clark_metro@metroplois.com',
      role:"Estudante",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Jason Todd',
      ativo: true,
      email: 'jason@gotham.com',
      role:"Estudante",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Ed Nygma',
      ativo: true,
      email: 'riddlemethis@gotham.com',
      role:"Professor",
      createdAt: new Date(),
      updatedAt: new Date()
    }

  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Pessoas', null, {});
  }
};
