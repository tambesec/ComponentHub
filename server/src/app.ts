import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();

// CORS - Support multiple origins
const webOrigin = process.env.WEB_ORIGIN || 'http://localhost:5173,http://localhost:3001';
const allowedOrigins = webOrigin.split(',').map(origin => origin.trim());

app.use(cors({ 
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

// JSON parsing
app.use(express.json());

// Routes
import healthRouter from './routes/health.js';
import productsRouter from './routes/products.js';
import categoriesRouter from './routes/categories.js';
import brandsRouter from './routes/brands.js';
import cartRouter from './routes/cart.js';
import ordersRouter from './routes/orders.js';
import authRouter from './routes/auth.js';

app.use('/api/health', healthRouter);
app.use('/api/products', productsRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/brands', brandsRouter);
app.use('/api/cart', cartRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/auth', authRouter);

// Swagger UI (serves server/openapi.yaml)
const specPath = path.resolve(__dirname, '../openapi.yaml');
const swaggerDocument = fs.existsSync(specPath) ? YAML.load(specPath) : {};
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/openapi.yaml', (_req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/yaml');
  res.send(fs.readFileSync(specPath, 'utf8'));
});

// Basic error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

export default app;

