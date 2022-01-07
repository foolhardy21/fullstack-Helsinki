/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {v1 as uuid} from 'uuid';
import patientData from '../data/patients';
import { NewPatient, PublicPatient } from '../types';

const patients: PublicPatient[] = patientData.map(
    ({id, name, dateOfBirth, gender, occupation}) => ({id, name, dateOfBirth, gender, occupation}));

export const getAllPatients = (): PublicPatient[] => {
    return patients;
};

export const addNewPatient = (patient: NewPatient): PublicPatient => {
    const patientObj = {...patient, id: uuid()}; 
    patients.push(patientObj);
    return patientObj;
};
