import mysql from 'mysql2';
import dotenv from 'dotenv';

// Carregar variáveis de ambiente
dotenv.config();

const dbUrl = process.env.DB_URL;

// Extrair componentes da URL (utilizando um pacote de URL ou manualmente)
const url = new URL(dbUrl);

// Configurar a conexão com MySQL utilizando os componentes da URL
const conn = mysql.createConnection({
  host: url.hostname,      // O host
  user: url.username,      // O usuário
  password: url.password,  // A senha
  database: url.pathname.slice(1)  // O nome do banco de dados (remover a barra inicial)
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

export default conn;
