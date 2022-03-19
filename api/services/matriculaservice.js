const Matriculas = require('../models').Matriculas;
const NaoEncontrado = require('../erros/NaoEncontrado');
const DadosNaoFornecidos = require('../erros/DadosNaoFornecidos');

module.exports = {

  async getAll(estudante_id){
    return await Matriculas.findAll({where:{estudante_id}});
  },
   
  async getBy(id, idEstudante){
    const matricula = await Matriculas.findOne({
      where:{
          id:id,
          estudante_id: idEstudante
        },
    });
  
    if(!matricula)
      throw new NaoEncontrado("Matricula");

    return matricula;
  },

}