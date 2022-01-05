import diagnoseData from "../data/diagnoses";
import { Diagnose } from "../types";

const diagnoses: Diagnose[] = diagnoseData;

const getAllDiagnoses = (): Diagnose[] => {
    return diagnoses;    
};

export default {
    getAllDiagnoses
}; 