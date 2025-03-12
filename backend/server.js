import express from 'express'; // Importando express
import { connectToDb } from './backend/db.js'; // Importando a função de conexão do arquivo db.js

const app = express();

app.get('/', function (req, res)
{
    res.send('Hello World');
})
  
const port = process.env.PORT || 3000; // Usando a variável de ambiente PORT se definida (padrão 3000)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
