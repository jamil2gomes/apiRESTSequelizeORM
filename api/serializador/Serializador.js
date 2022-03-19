
const jsontoxml = require('jsontoxml');
const ValorNaoSuportado = require('../erros/ValorNaoSuportado');

class Serializador{

  json (dados) {
      return JSON.stringify(dados);
  }

  xml (dados) {
      let tag = this.tagSimples;
      if(Array.isArray(dados)){
          tag = this.tagList;

          dados = dados.map(item => {
              return {
                  [this.tagSimples]:item   
              }
          });
      }

      return jsontoxml({[tag]:dados});
  }

  serializar (dados) {
      dados = this.filtrar(dados);

    if (this.contentType === 'application/json') {
        return this.json(dados);
    }

    if (this.contentType === 'application/xml') {
      return this.xml(dados);
  }

    throw new ValorNaoSuportado(this.contentType);
}

  filtrarObjeto (dados) {
    const novoObjeto = {};

    this.camposPublicos.forEach((campo) => {
        if (dados.hasOwnProperty(campo)) {
            novoObjeto[campo] = dados[campo];
        }
    })

    return novoObjeto
}

  filtrar (dados) {
    if (Array.isArray(dados)) {
        dados = dados.map(item => {
            return this.filtrarObjeto(item);
        })
    } else {
        dados = this.filtrarObjeto(dados);
    }

    return dados
}
}

class SerializadorPessoa extends Serializador {

  constructor (contentType, camposExtras) {
    super();
    this.contentType = contentType;
    this.camposPublicos = ["id", "nome", "ativo"].concat(camposExtras || []);
    this.tagSimples="pessoa";
    this.tagList="pessoas";
  }
}

class SerializadorNivel extends Serializador {

  constructor (contentType, camposExtras) {
    super();
    this.contentType = contentType;
    this.camposPublicos = ["descr_nivel"].concat(camposExtras || []);
    this.tagSimples="nivel";
    this.tagList="niveis";
  }
}

class SerializadorTurma extends Serializador {

  constructor (contentType, camposExtras) {
    super();
    this.contentType = contentType;
    this.camposPublicos = ["data_inicio, docente, nivel"].concat(camposExtras || []);
    this.tagSimples="turma";
    this.tagList="turmas";
  }
}


module.exports = {
  formatosAceitos: ['application/json'],
  Serializador,
  SerializadorPessoa,
  SerializadorNivel,
  SerializadorTurma
}