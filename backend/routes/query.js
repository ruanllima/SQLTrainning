import conn from '../backend/db.js';
import express from 'express';

const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: true }));  // Necessário para capturar dados enviados de um form

app.post('/send', (req, res) => 
{
    const {query} = req.body;
    res.send(query);
})

export default router;
