const {Router} = require('express');
const TurmaController = require('../controllers/TurmaController');

const routerTurmas = Router();

routerTurmas.options('/turmas', (requisicao, resposta) => {
  resposta.set('Access-Control-Allow-Methods', 'GET');
  resposta.set('Access-Control-Allow-Headers', 'Content-Type');
  resposta.status(204).end();
});

routerTurmas.get('/turmas', TurmaController.getAll);


routerTurmas.options('/turmas/:id', (requisicao, resposta) => {
  resposta.set('Access-Control-Allow-Methods', 'GET');
  resposta.set('Access-Control-Allow-Headers', 'Content-Type');
  resposta.status(204).end();
});

routerTurmas.get('/niveis/:id', TurmaController.getBy);



module.exports = routerTurmas;