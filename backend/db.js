import { Client } from 'pg';

const connectToDb = async () => {
  const client = new Client({
    connectionString: process.env.DB_URL,
  });

  try {
    await client.connect();
    console.log('Conectado ao banco de dados!');
    return client;
  } catch (err) {
    console.error('Erro de conexão:', err);
    throw err;
  }
};

export { connectToDb };
