import express from 'express';

const app = express();
app.use(express.json());

app.get('/',(_req,res) => {
    res.send('hello patient');
});

export default app;