import express from 'express';
import cors from 'cors';
import pingRouter from './routes/pingRouter';
import diagnoseRouter from './routes/diagnoseRouter';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/ping', pingRouter);
app.use('/api/diagnoses', diagnoseRouter);

export default app;
