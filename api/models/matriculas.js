'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matriculas extends Model {
   
    static associate(models) {
      Matriculas.belongsTo(models.Turmas,{foreignKey: 'turma_id'});
      Matriculas.belongsTo(models.Pessoas,{foreignKey: 'estudante_id', as:'estudante'});
    }
  }
  Matriculas.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Matriculas',
  });
  return Matriculas;
};