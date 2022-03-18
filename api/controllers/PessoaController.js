const service = require('../services/pessoaservice');
const SerializadorPessoa = require('../serializador/Serializador').SerializadorPessoa;

class PessoaController {

  static async getAll(requisicao, resposta, proximo){

    try {
      const pessoas = await service.getAll();

      const serializador = new SerializadorPessoa(
        resposta.getHeader('Content-Type')
      );

      resposta.status(200).send(
        serializador.serializar(pessoas)
      );
    } catch (error) {
      proximo(error);
    }

  }

  static async create(requisicao, resposta, proximo){

    try {
      const dadosRecebidos = requisicao.body;
      const pessoa = await service.create(dadosRecebidos);

      const serializador = new SerializadorPessoa(
        resposta.getHeader('Content-Type')
      );
      
      const timestamp = (new Date(pessoa.updatedAt)).getTime();
      resposta.set('Last-Modified',timestamp);
      resposta.set('Location',`pessoas/`);

      resposta.status(201).send(
        serializador.serializar(pessoa)
      );
    } catch (error) {
      proximo(error);
    }

  }

  static async getBy(requisicao, resposta, proximo){

    try {
      const {id} = requisicao.params;
      const pessoa = await service.getBy(id);

      const serializador = new SerializadorPessoa(
        resposta.getHeader('Content-Type'),
        ['email','role', 'createdAt', 'updatedAt']
      );

      resposta.status(200).send(
        serializador.serializar(pessoa)
      );
    } catch (error) {
      proximo(error);
    }

  }

  static async update(requisicao, resposta, proximo){

    try {
      const {id} = requisicao.params;
      const dadosRecebidos = requisicao.body;

      await service.update(dadosRecebidos, id);

      resposta.status(204).end();
    } catch (error) {
      proximo(error);
    }

  }

  static async delete(requisicao, resposta, proximo){

    try {
      const {id} = requisicao.params;
      await service.getBy(id);

      await service.delete(id);

      resposta.status(204).end();
    } catch (error) {
      proximo(error);
    }

  }


}

module.exports = PessoaController;