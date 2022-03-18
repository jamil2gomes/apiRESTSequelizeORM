'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Matriculas', [

      {
        status: 'confirmado',
        turma_id: 1,
        estudante_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
       {
        status: 'confirmado',
        turma_id: 1,
        estudante_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Matriculas', null, {});
  }
};
