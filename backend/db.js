import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connectToDb = async () => {
  const client = new Client({
    connectionString: process.env.DATABASE_URL, // Usando a variável de ambiente DB_URL
  });

  await client.connect();
  return client;
};

export { connectToDb };
