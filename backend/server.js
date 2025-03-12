import express from 'express'; // Importando express
import { connectToDb } from './db.js'; // Importando a função de conexão do arquivo db.js

const app = express();

app.get('/users', async (req, res) => {
    try {
      const client = await connectToDb();
      // Executando uma query direta sem parâmetros
      const result = await client.query('SELECT * FROM customers');
      
      // Retornando os dados encontrados
      res.json(result.rows); // result.rows contém os dados retornados da query
      client.release(); // Libera a conexão
    } catch (error) {
      console.error('Erro ao consultar o banco:', error);
      res.status(500).json({ error: 'Erro no servidor' });
    }
  });
  
const port = process.env.PORT || 3000; // Usando a variável de ambiente PORT se definida (padrão 3000)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
