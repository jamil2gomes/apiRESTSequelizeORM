const router = require("express").Router({mergeParams:true});
const MatriculaController = require('../controllers/MatriculaController');



router.options('/', (requisicao, resposta) => {
  resposta.set('Access-Control-Allow-Methods', 'GET, POST');
  resposta.set('Access-Control-Allow-Headers', 'Content-Type');
  resposta.status(204).end();
});

router.get('/', MatriculaController.getAll);
router.get('/:idMatricula', MatriculaController.getBy);

module.exports = router;