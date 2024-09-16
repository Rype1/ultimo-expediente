### CRIANDO MINHA PRIMEIRA API

API ou Application Programing Interafe (Iterface de Programação de Aplicativos) é uma implementação que permite facilitar acesso a recursos de programação que auxiliam no desenvolvimento de aplicações.

## CRIANDO UMA API SIMPLES FAKE

1. Iniciar package.json `npm init - y`
2. Instalar pacote json-server na versão 0.17... `npm i json-server@0.17.4`
3. Criar o arquivo db.json `touch db.json`
4. Cololcar no db.json sua primeira rota ou endpoint ou recurso `{ "pessoas": []}`
5. Rodar a aplicação `json-server --watch  db.json`
6. Testar a API com as operações de CRUD em uma ferramenta como o API TESTER do replit