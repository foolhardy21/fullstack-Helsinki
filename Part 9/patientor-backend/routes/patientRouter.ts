/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
const router = express.Router();
import {getAllPatients, addNewPatient} from '../services/patientService';

router.get('/', (_req, res) => {
    res.send(getAllPatients());
});

router.post('/', (req, res) => {
    const {name, ssn, dateOfBirth, occupation, gender} = req.body;
    res.send(addNewPatient({name, ssn, dateOfBirth, occupation, gender}));
});

export default router;
