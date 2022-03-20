const Pessoas = require('../models').Pessoas;
const NaoEncontrado = require('../erros/NaoEncontrado');
const DadosNaoFornecidos = require('../erros/DadosNaoFornecidos');

module.exports = {

  async getAll(){
    return await Pessoas.findAll({raw:true});
  },
   
  async getBy(id){
    const pessoa = await Pessoas.findOne({
      where:{id:id},
      raw:true
    });
  
    if(!pessoa)
      throw new NaoEncontrado("Pessoa");

    return pessoa;
  },

  async create(pessoa){
    const resultado = await Pessoas.create({
      nome: pessoa.nome,
      email: pessoa.email,
      role: pessoa.role,
      ativo: pessoa.ativo,
    });
  
    pessoa.id = resultado.id;
    pessoa.createdAt = resultado.createdAt;
    pessoa.updatedAt = resultado.updatedAt;

    return pessoa;
  },

  async update(pessoa, id){
  await Pessoas.findOne({where:{id}});

  const campos = ['nome', 'ativo', 'role', 'email'];
  const dadosParaAtualizar = {}

  campos.forEach((campo) => {
    const valor = pessoa[campo];

    if (campo === 'nome' && typeof valor === 'string' && valor.length > 0) {
      dadosParaAtualizar[campo] = valor;
    }
    if (campo === 'role' && typeof valor === 'string' && valor.length > 0) {
      dadosParaAtualizar[campo] = valor;
    }
    if (campo === 'email' && typeof valor === 'string' && valor.length > 0) {
      dadosParaAtualizar[campo] = valor;
    }

    if (campo === 'ativo' && typeof valor === 'boolean') {
      dadosParaAtualizar[campo] = valor;
    }
  })

  if (Object.keys(dadosParaAtualizar).length === 0) {
    throw new DadosNaoFornecidos();
  }

  await Pessoas.update(dadosParaAtualizar, {where:{id:id}});
  },

  async delete(id) {
    return await Pessoas.destroy({
          where: {id}
    });
  },

  async restaura(id) {
    return await Pessoas.restore({
          where: {id}
    });
  },
}