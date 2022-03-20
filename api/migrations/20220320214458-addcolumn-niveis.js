'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Niveis',
      'deletedAt', 
      Sequelize.DATE,
      {
      after:'descr_nivel'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Niveis', 'deletedAt');
  }
};