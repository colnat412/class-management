import { createClient } from 'redis';
import dotenv from 'dotenv';

dotenv.config();

export const redis = createClient({
  url: process.env.REDIS_URL,
});

redis
  .connect()
  .then(() => console.log('Redis connected'))
  .catch(console.error);
