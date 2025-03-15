// server.js
import express from 'express';
import conn from './db.js';  // Importando a conexão do banco de dados

const app = express();
const port = 3000;

// Rota para retornar todos os produtos
app.get('/products', (req, res) => {
  conn.query('SELECT * FROM products', (err, results) => {
    if (err) {
      res.status(500).send('Erro ao buscar produtos');
      return;
    }
    res.json(results);  // Retorna os resultados como JSON
  });
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
