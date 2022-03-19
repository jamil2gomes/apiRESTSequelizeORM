const service = require('../services/matriculaservice');
class MatriculaController {

    static async getAll(requisicao, resposta, proximo){
  
      try {
        const estudante_id = requisicao.estudante.id;
        const matriculas = await service.getAll(estudante_id);
        resposta.status(200).send(matriculas);
      } catch (error) {
        proximo(error);
      }
  
    }

    static async getBy(requisicao, resposta, proximo){

        const id = requisicao.params.idMatricula;
        const idEstudante = requisicao.estudante.id;
  
        try {
          const matricula = await service.getBy(id, idEstudante);
          resposta.status(200).send(matricula);
        } catch (error) {
          proximo(error);
        }
    
    }
}

module.exports = MatriculaController;