'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Matriculas',
      'deletedAt', 
      Sequelize.DATE,
      {
      after:'estudante_id'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Matriculas', 'deletedAt');
  }
};