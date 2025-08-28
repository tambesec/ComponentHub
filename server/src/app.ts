import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();

// CORS
const webOrigin = process.env.WEB_ORIGIN || 'http://localhost:5173';
app.use(cors({ origin: webOrigin }));

// JSON parsing
app.use(express.json());

// Routes
import healthRouter from './routes/health';
import productsRouter from './routes/products';

app.use('/api/health', healthRouter);
app.use('/api/products', productsRouter);

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

