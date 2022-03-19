const Turmas = require('../models').Turmas;
const Pessoas = require('../models').Pessoas;
const Niveis = require('../models').Niveis;
const NaoEncontrado = require('../erros/NaoEncontrado');
const DadosNaoFornecidos = require('../erros/DadosNaoFornecidos');

module.exports = {

  async getAll(){
    const turmas = await Turmas.findAll({
      include: [
        {
          model: Niveis,
          as: 'nivel',
          required:true
        },
        {
          model: Pessoas,
          as: 'docente',
          required:true
        }
      ],
     
    });
  
    return turmas;
  },
   
  async getBy(id){
    const turma = await Turmas.findOne({
      where:{id:id},
      raw:true
    });
  
    if(!turma)
      throw new NaoEncontrado("Turma");

    return turma;
  },
}