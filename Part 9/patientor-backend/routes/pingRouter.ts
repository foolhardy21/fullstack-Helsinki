import express from 'express';
const router = express.Router();

router.get('/', (_req, res) => {
    res.send('ping page');
    res.end();
});

export default router;
