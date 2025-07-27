import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { redis } from './databases/redis';
import { db } from './databases/database';
import { AppDataSource } from './configs/orm';

dotenv.config();

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Server is running'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`✅ Server started at http://localhost:${PORT}`)
);
