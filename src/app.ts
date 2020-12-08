import { json } from 'body-parser';
import express, { request } from 'express';
import { connectDb } from './config/db';
import routes from './routes';

const app: express.Application = express();

connectDb();
app.use(express.json());
app.use(routes);

export default app