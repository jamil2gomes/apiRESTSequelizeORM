# API REST COM SEQUELIZE ORM

<p>Projeto fruto do curso da Alura: ORM com NodeJS: API com Sequelize e MYSQL.</p>

## Sequelize Cli

### Criar Model

<p><code>npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string</code></p>

### Rodar Migration

<p><code>npx sequelize-cli db:migrate</code></p>

### Criar Seeds

<p><code>npx sequelize-cli seed:generate --name pessoas</code></p>

### Rodar Seeds

<p><code>npx sequelize-cli db:seed:all</code></p>
