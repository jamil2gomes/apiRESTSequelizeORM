const express = require('express');
const bodyParser = require('body-parser');


let app = express();

app.use(bodyParser.json());

//MIDDLEWARE de tipo de formato suportado
app.use((requisicao, resposta, proximo) => {
  let formatoRequisitado = requisicao.header('Accept');

  //se o cliente aceita qualquer tipo então força que ele aceite json
  if (formatoRequisitado === '*/*') {
      formatoRequisitado = 'application/json';
  }

  //se o cliente pedir um formato não suportado então envia um 406
  if (formatosAceitos.indexOf(formatoRequisitado) === -1) {
      resposta.status(406);
      resposta.end();
      return;
  }

  resposta.setHeader('Content-Type', formatoRequisitado);
  proximo();
});

app.use((requisicao, resposta, proximo) => {
    resposta.set('Access-Control-Allow-Origin', '*');
    proximo();
});

//MIDDLEWARE tratamento de erros personalizados
app.use((erro, requisicao, resposta, proximo) => {
  let status = 500

  if (erro instanceof NaoEncontrado) {
      status = 404
  }

  if (erro instanceof CampoInvalido || erro instanceof DadosNaoFornecidos) {
      status = 400
  }

  if (erro instanceof ValorNaoSuportado) {
      status = 406
  }

  resposta.status(status)
  resposta.send(
      JSON.stringify({
          mensagem: erro.message,
          id: erro.idErro
      })
  )
})

app.listen(3000, ()=>{
  console.log('Server is runing on port 3000');
});