const {Router} = require('express');
const NivelController = require('../controllers/NivelController');

const routerNiveis = Router();

routerNiveis.options('/niveis', (requisicao, resposta) => {
  resposta.set('Access-Control-Allow-Methods', 'GET, POST');
  resposta.set('Access-Control-Allow-Headers', 'Content-Type');
  resposta.status(204).end();
});

routerNiveis.get('/niveis', NivelController.getAll);

routerNiveis.post('/niveis', NivelController.create);

routerNiveis.options('/niveis/:id', (requisicao, resposta) => {
  resposta.set('Access-Control-Allow-Methods', 'GET, PUT, DELETE');
  resposta.set('Access-Control-Allow-Headers', 'Content-Type');
  resposta.status(204).end();
});

routerNiveis.get('/niveis/:id', NivelController.getBy);

routerNiveis.put('/nivris/:id', NivelController.update);

routerNiveis.delete('/niveis/:id', NivelController.delete);

module.exports = routerNiveis;