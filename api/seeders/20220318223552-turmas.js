'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Turmas', [

      {
        data_inicio: '2022-03-01',
        nivel_id: 1,
        docente_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
       {
        data_inicio: '2022-02-01',
        nivel_id: 3,
        docente_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: '2022-01-01',
        nivel_id: 2,
        docente_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Turmas', null, {});
  }
};
