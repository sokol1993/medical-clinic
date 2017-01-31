import { Doctor } from '../_models/doctor'

export class MedicalVisitList{
    id: number;
    doctor: Doctor;
    date: Date;
    time: Date;
    availableVisits: number;
}