'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Niveis', [

      {
        descr_nivel: 'nivel 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_nivel: 'nivel 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_nivel: 'nivel 3',
        createdAt: new Date(),
        updatedAt: new Date()
      }
  
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Niveis', null, {});
  }
};
