const Niveis = require('../models').Niveis;
const Turmas = require('../models').Turmas;
const NaoEncontrado = require('../erros/NaoEncontrado');
const DadosNaoFornecidos = require('../erros/DadosNaoFornecidos');

module.exports = {

  async getAll(){
    return await Niveis.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include:{model:Turmas, required:true, attributes: { exclude: ['createdAt', 'updatedAt'] }}
    });
  },
   
  async getBy(id){
    const nivel = await Niveis.findOne({
      where:{id:id},
      raw:true
    });
  
    if(!nivel)
      throw new NaoEncontrado("Nivel");

    return nivel;
  },

  async create(nivel){
    const resultado = await Niveis.create({
        descr_nivel: nivel.descr_nivel
    });
  
    nivel.id = resultado.id;
    nivel.createdAt = resultado.createdAt;
    nivel.updatedAt = resultado.updatedAt;

    return nivel;
  },

  async update(nivel, id){
  await Niveis.findOne({where:{id}});

  const campos = ['descr_nivel'];
  const dadosParaAtualizar = {}

  campos.forEach((campo) => {
    const valor = nivel[campo];

    if (campo === 'descr_nivel' && typeof valor === 'string' && valor.length > 0) {
      dadosParaAtualizar[campo] = valor;
    }

  })

  if (Object.keys(dadosParaAtualizar).length === 0) {
    throw new DadosNaoFornecidos();
  }

  await Niveis.update(dadosParaAtualizar, {where:{id:id}});
  },

  async delete(id) {
    return await Niveis.destroy({
          where: {id}
    });
  },
}