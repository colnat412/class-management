import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { AppDataSource } from './configs/orm';
import authRoutes from './routes/auth.routes';

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

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`✅ Server started at http://localhost:${PORT}`)
);
