const service = require('../services/nivelservice');
const SerializadorNivel = require('../serializador/Serializador').SerializadorNivel;

class NivelController {

  static async getAll(requisicao, resposta, proximo){

    try {
      const niveis = await service.getAll();

      const serializador = new SerializadorNivel(
        resposta.getHeader('Content-Type')
      );

      resposta.status(200).send(
       niveis
      );
    } catch (error) {
      proximo(error);
    }

  }

  static async create(requisicao, resposta, proximo){

    try {
      const dadosRecebidos = requisicao.body;
      const nivel = await service.create(dadosRecebidos);

      const serializador = new SerializadorNivel(
        resposta.getHeader('Content-Type')
      );
      
      const timestamp = (new Date(nivel.updatedAt)).getTime();
      resposta.set('Last-Modified',timestamp);
      resposta.set('Location',`niveis/`);

      resposta.status(201).send(
        serializador.serializar(nivel)
      );
    } catch (error) {
      proximo(error);
    }

  }

  static async getBy(requisicao, resposta, proximo){

    try {
      const {id} = requisicao.params;
      const nivel = await service.getBy(id);

      const serializador = new SerializadorNivel(
        resposta.getHeader('Content-Type'),
        ['id', 'createdAt', 'updatedAt']
      );

      resposta.status(200).send(
        serializador.serializar(nivel)
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

module.exports = NivelController;