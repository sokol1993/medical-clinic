import { User } from '../_models/user';
import { Doctor } from '../_models/doctor'

export class MedicalVisit{
    id: number;
    idList: number;
    doctor: Doctor;
    user: User;
    date: Date;
    time: Date;
    isCompleted: boolean; 
}