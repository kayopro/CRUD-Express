const express = require("express");
const app = express();
const port = 3030;

app.use(express.json());

// Dados em memória para simular um banco de dados
let users = [
  {
    id: 1,
    name: "Jose Lucas Silva",
    email: "jose@ufca.edu.br",
    age: 30,
    gender: "male",
  },
];

// Funções para manipulação dos dados em memória
const getAllUsers = () => users;

const createUser = (newUser) => {
  users.push(newUser);
};

const updateUserById = (userId, newUser) => {
  const user = users.find((user) => user.id === userId);
  if (user) {
    Object.assign(user, newUser);
  }
};

const deleteUserById = (userId) => {
  users = users.filter((user) => user.id !== userId);
};

// Função para validar os dados do usuário
const validateUser = (user) => {
  const { id, name, email, age, gender } = user;
  if (
    typeof id !== "number" ||
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof age !== "number" ||
    typeof gender !== "string"
  ) {
    return false;
  }
  return true;
};

// Rota principal para a página inicial
app.get("/", (req, res) => {
  res.send("<html><body><h1>Página Inicial</h1></body></html>");
});

// Rota GET para obter todos os usuários
app.get("/users", (req, res) => {
  res.json(getAllUsers());
});

// Rota POST para criar um novo usuário
app.post("/users", (req, res) => {
  const newUser = req.body;
  if (!validateUser(newUser)) {
    return res.status(400).json({ error: "Formato Invalido" });
  }
  createUser(newUser);
  res.status(201).json(newUser);
});

// Rota PUT para atualizar um usuário existente
app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const newUser = req.body;
  if (!validateUser(newUser)) {
    return res.status(400).json({ error: "Formato Invalido" });
  }
  updateUserById(userId, newUser);
  res.json(newUser);
});

// Rota DELETE para excluir um usuário
app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  deleteUserById(userId);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});