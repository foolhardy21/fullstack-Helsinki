import diagnoseData from "../data/diagnoses";
import { Diagnose } from "../types";

const diagnoses: Diagnose[] = diagnoseData;

export const getAllDiagnoses = (): Diagnose[] => {
    return diagnoses;    
};
