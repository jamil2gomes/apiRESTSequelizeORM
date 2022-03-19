const service = require('../services/turmaservice');
const SerializadorTurma = require('../serializador/Serializador').SerializadorTurma;

class TurmaController {

  static async getAll(requisicao, resposta, proximo){

    try {
      const turmas = await service.getAll();

      const serializador = new SerializadorTurma(
        resposta.getHeader('Content-Type')
      );

      resposta.status(200).send(
        turmas
      );
    } catch (error) {
      proximo(error);
    }

  }

  static async getBy(requisicao, resposta, proximo){

    try {
      const {id} = requisicao.params;
      const nivel = await service.getBy(id);

      const serializador = new SerializadorTurma(
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



}

module.exports = TurmaController;