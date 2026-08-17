//server.js - Primeiro servidor Node.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (re, res) => {
    res.send(`servidor Node.js rodando na porta:` + PORT);
});

app.listen(PORT, () => {
    console.log(`servidor ativo em http://localhost:${PORT}`);
});
