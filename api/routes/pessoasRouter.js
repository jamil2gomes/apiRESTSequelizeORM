const {Router} = require('express');
const PessoaController = require('../controllers/PessoaController');

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

module.exports = router;