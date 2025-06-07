// constants.ts
import { config } from 'dotenv';
config(); // Load .env file

export const logger = {
  log: (message: string) => console.log(`[${new Date().toLocaleString()}] ${message}`),
  error: (message: string) => console.error(`[${new Date().toLocaleString()}] ERROR: ${message}`)
};
