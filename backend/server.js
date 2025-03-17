// server.js
import express from 'express';
import conn from './db.js';  // Importando a conexão do banco de dados
import path from 'path';

const app = express();
const port = 3000;
const __dirname = path.resolve()

app.use(express.static(path.join(__dirname, 'frontend')));
app.use(express.urlencoded({ extended: true }));


app.get('/', async (req, res) => {
  try {
    const client = await connectToDb();
    res.send('Conectado ao banco de dados com sucesso!');
  } catch (err) {
    res.status(500).send('Erro ao conectar ao banco de dados: ' + err.message);
  }
});

app.post('/send', (req, res) => 
  {
      res.send("FOI");
  })

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
