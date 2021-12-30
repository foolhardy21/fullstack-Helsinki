import express from 'express';
import cors from 'cors';
import pingRouter from './routes/pingRouter';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/ping', pingRouter);

export default app;