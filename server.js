const express = require('express');
const users = require('./data/users');

const app = express();
const PORT = 3000;

app.use(express.json());

// GET /
app.get('/', (req, res) => {
    res.json({
        mensagem: 'API Connect funcionando!'
    });
});

// GET /users
app.get('/users', (req, res) => {
    res.status(200).json({
        data: users
    });
});

// GET /users/:id
app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);

    const usuario = users.find(user => user.id === id);

    if (!usuario) {
        return res.status(404).json({
            error: 'Usuário não encontrado.'
        });
    }

    res.status(200).json({
        data: usuario
    });
});

// POST /users
// GET /users
app.get('/users', (req, res) => {
    res.status(200).json({
        data: users
    });
});

// GET /users/:id
app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);

    const usuario = users.find(user => user.id === id);

    if (!usuario) {
        return res.status(404).json({
            error: 'Usuário não encontrado.'
        });
    }

    res.status(200).json({
        data: usuario
    });
});app.post('/users', (req, res) => {
    const { nome, email } = req.body;

    if (!nome || !email) {
        return res.status(400).json({
            error: 'Nome e e-mail são obrigatórios.'
        });
    }

    const novoId = users.length > 0
        ? Math.max(...users.map(user => user.id)) + 1
        : 1;

    const novoUsuario = {
        id: novoId,
        nome: nome,
        email: email
    };

    users.push(novoUsuario);

    res.status(201).json({
        data: novoUsuario
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});