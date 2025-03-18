import pkg from 'pg';
import dotenv from 'dotenv';
const { Pool } = pkg;

dotenv.config();


const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: { rejectUnauthorized: false }
});

export default async function handler(req, res) {
  try {
    const result = await pool.query('SELECT NOW()'); // Testa a conexão pegando a hora do banco
    res.status(200).json({ message: 'Conexão bem-sucedida!', time: result.rows[0].now });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao conectar!', error: error.message });
  }
}