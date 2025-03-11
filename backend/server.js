import express from 'express';
import mysql from 'mysql2';

const app = express();

const conn = mysql.createConnection(
    {
        host: process.env.DB_HOST,  // A variável DB_HOST que você configurou no Railway
        user: process.env.DB_USER,  // A variável DB_USER
        password: process.env.DB_PASSWORD,  // A variável DB_PASSWORD
        database: process.env.DB_NAME,  // A variável DB_NAME
    })

conn.connect((err) => {
    if (err) {
      console.error('Erro ao conectar no banco de dados:', err.stack);
      return;
    }
    console.log('Conectado ao banco de dados com o ID', conn.threadId);
  });
  
  app.get('/', (req, res) => {
    res.send('Servidor rodando!');
  });
  
  app.listen(3306, () => {
    console.log('Servidor rodando na porta 3306');
  });