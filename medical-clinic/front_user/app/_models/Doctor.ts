import { Specialization } from '../_models/specialization';
import { Login } from '../_models/login';

export class Doctor{
    id: number;
    
    login: Login;

    firstName: string;
    lastName: string;

    medicalSpecialization: Specialization;
    
    mondayHours: string;
    tuesdayHours: string;
    wednesdayHours: string;
    thursdayHours: string;
    fridayHours: string;
}