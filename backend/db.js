import { Client } from 'pg';

const connectToDb = async () => {
  const client = new Client({
    user: 'postgres',
    host: 'db.asmgnoxzlvkbbpnchbkd.supabase.co',
    database: 'postgres',
    password: 'Dezembrode81!',
    port: 5432,
  });

  await client.connect();
  return client;
};

export { connectToDb };