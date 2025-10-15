import { createServer } from 'http';
import app from './app.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const port = Number(process.env.PORT || 3000);

console.log('Environment PORT:', process.env.PORT);
console.log('Server will listen on port:', port);

const server = createServer(app);

server.listen(port, '0.0.0.0', () => {
  console.log(`✅ API listening on http://localhost:${port}`);
  console.log(`📡 Backend server ready!`);
});
