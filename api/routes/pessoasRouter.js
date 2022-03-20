const {Router} = require('express');
const service = require('../services/pessoaservice');
const PessoaController = require('../controllers/PessoaController');
const roteadorMatricula = require('./matriculaRouter');
const router = Router();


router.options('/pessoas', (requisicao, resposta) => {
  resposta.set('Access-Control-Allow-Methods', 'GET, POST');
  resposta.set('Access-Control-Allow-Headers', 'Content-Type');
  resposta.status(204).end();
});

router.get('/pessoas', PessoaController.getAll);

router.post('/pessoas', PessoaController.create);

router.options('/pessoas/:id', (requisicao, resposta) => {
  resposta.set('Access-Control-Allow-Methods', 'GET, PUT, DELETE');
  resposta.set('Access-Control-Allow-Headers', 'Content-Type');
  resposta.status(204).end();
});

router.get('/pessoas/:id', PessoaController.getBy);

router.put('/pessoas/:id', PessoaController.update);

router.delete('/pessoas/:id', PessoaController.delete);

router.options('/pessoas/:id/restaura', (requisicao, resposta) => {
  resposta.set('Access-Control-Allow-Methods', 'POST');
  resposta.set('Access-Control-Allow-Headers', 'Content-Type');
  resposta.status(204).end();
});
router.post('/pessoas/:id/restaura', PessoaController.restaura);


const verificarEstudante = async(requisicao, resposta, proximo) =>{
  try {
    const id = requisicao.params.id;
    const estudante =  await service.getBy(id);
    requisicao.estudante = estudante;
    proximo();
  } catch (error) {
    proximo(error);
  }
}

router.use('/pessoas/:id/matriculas/', verificarEstudante, roteadorMatricula);

module.exports = router;