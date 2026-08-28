\# API Connect



\## Objetivo



A API Connect é uma API REST desenvolvida para realizar o cadastro e a consulta de usuários.



O projeto foi desenvolvido como parte de uma atividade acadêmica com o objetivo de praticar a criação de uma API utilizando Node.js e Express, incluindo operações de criação, consulta, validação e tratamento de erros.



\## Tecnologias utilizadas



\- Node.js

\- Express

\- JavaScript

\- JSON

\- Postman

\- Git

\- GitHub



\## Estrutura do projeto



API-Connect/

│

├── data/

│   └── users.js

│

├── .gitignore

├── README.md

├── package.json

├── package-lock.json

└── server.js



\## Como executar o projeto



Instale as dependências:



npm install



Inicie a API:



node server.js



A API será executada em:



http://localhost:3000



\## Endpoints



\### GET /



Verifica se a API está funcionando.



GET http://localhost:3000/



\### GET /users



Retorna a lista de usuários cadastrados.



GET http://localhost:3000/users



\### GET /users/:id



Consulta um usuário específico pelo ID.



Exemplo:



GET http://localhost:3000/users/1



\### POST /users



Cadastra um novo usuário.



POST http://localhost:3000/users



Exemplo de Body:



{

&#x20; "nome": "Carlos Oliveira",

&#x20; "email": "carlos@email.com"

}



Os campos nome e email são obrigatórios.



\## Testes



Os endpoints foram testados utilizando o Postman, validando:



\- Consulta da API

\- Listagem de usuários

\- Consulta de usuário por ID

\- Cadastro de usuário

\- Validação de campos obrigatórios

\- Tratamento de usuário não encontrado



\## Repositório



O código-fonte do projeto está disponível no GitHub:



https://github.com/KleberPereiraSilva17041/api-connect-kleber

