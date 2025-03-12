import { Client } from 'pg';
import dotenv from 'dotenv';

// Carregar as variáveis de ambiente do arquivo .env
dotenv.config();

const connectToDb = async () => {
  const client = new Client({
    connectionString: process.env.DB_URL, // Usando a variável de ambiente DB_URL
  });

  await client.connect();
  return client;
};

export { connectToDb };
