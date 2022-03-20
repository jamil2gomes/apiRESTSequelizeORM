'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Turmas','deletedAt', Sequelize.DATE,{
      after:'nivel_id'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Turmas', 'deletedAt');
  }
};