import patientData from '../data/patients';
import { PublicPatient } from '../types';

const patients: PublicPatient[] = patientData.map(
    ({id, name, dateOfBirth, gender, occupation}) => ({id, name, dateOfBirth, gender, occupation}));

const getAllPatients = (): PublicPatient[] => {
    return patients;
};

export default {
    getAllPatients
};
