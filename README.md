# Estudo Dirigido - Node.js Express

Neste guia, vamos explorar o desenvolvimento de um CRUD (Create, Read, Update, Delete) usando o framework **Express.js.** O estudo possui foco nas operações básicas de um CRUD para gerenciar informações de usuários. As instruções abaixo apresentam trechos de código necessários para implementação do CRUD, entretanto, espera-se que você construa rotinas extras para a construção da API.

## Criando o Projeto

1. Crie uma pasta para o projeto.
2. Abra o terminal e navegue até a pasta do projeto.
3. Execute o seguinte comando para criar um arquivo **`package.json`**:

```bash
npm init -y
```

## Configurando o Servidor Express

1. Instale o Express.js executando o seguinte comando:

   ```bash
   npm install express
   ```

2. Crie um arquivo chamado **`app.js`** na pasta do projeto.
3. Dentro do arquivo **`app.js`**, adicione o seguinte código:

   ```bash
   const express = require('express');
   const app = express();
   const port = 3030;

   // Rota principal para a página inicial
   app.get('/', (req, res) => {
     // Envie uma página HTML como resposta
     res.send('<html><body><h1>Página Inicial</h1></body></html>');
   });

   // Rota GET para CRUD de usuários (ainda sem implementação)
   app.get('/users', (req, res) => {
     // Implemente a lógica para buscar usuários
     res.send('Lista de Usuários');
   });

   // Implemente outras rotas para criar, atualizar e excluir usuários

   app.listen(port, () => {
     console.log(`Servidor rodando em http://localhost:${port}`);
   });

   ```

4. Configure o script no arquivo `package.json` o comando `npm start`:

   ```json
   "start": "node ./app.js"
   ```

Você pode verificar o servidor usando o comando `npm start` e acessando [http://localhost:3030](http://localhost:3030/) no seu navegador. Você deve ver a mensagem “Página Inicial”.

## Implementando o CRUD de Usuários

1. Crie rotas adicionais para as operações de CRUD:
   - Rota para criar um novo usuário (**`POST /users`**).
   - Rota para atualizar um usuário existente (**`PUT /users/:id`**).
   - Rota para excluir um usuário (**`DELETE /users/:id`**).

O CRUD será composto por uma estrutura de dados em memória, simulando o comportamento de um banco de dados.

### **Implementação do CRUD em Memória**

1. Dentro do arquivo **`app.js`**, adicione o seguinte código para simular o armazenamento e recuperação de dados dos usuários:

```jsx
let users = [
  {
    id: 1,
    name: "João da Silva",
    email: "joao@ufca.edu.br",
    age: 30,
    gender: "male",
  },
];

const getAllUsers = () => users;

const createUser = (newUser) => users.push(newUser);

const updateUserById = (userId, newUser) => {
  const user = users.find((user) => user.id === userId);
  if (user) {
    Object.assign(user, newUser);
  }
};

const deleteUserById = (userId) => {
  users = users.filter((user) => user.id !== userId);
};
```

## **Desafio**

O desafio consiste na implementação de rotas para criar, atualizar e excluir usuários no CRUD, utilizando as funções definidas acima. Cada rota deve comunicar-se diretamente com as funções do CRUD em memória.

É importante ressaltar que as rotas de inserção e atualização devem obedecer, obrigatoriamente, o seguinte contrato:

```json
{
  "id": 1,
  "name": "João da Silva",
  "email": "joao@ufca.edu.br",
  "age": 30,
  "gender": "male"
}
```

Lembre-se de que este é apenas um exemplo de armazenamento em memória. Vocês podem explorar posteriormente bancos de dados mais robustos, como o MongoDB, para aprimorar suas habilidades
