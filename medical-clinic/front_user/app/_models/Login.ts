import { User } from '../_models/user';
import { Doctor } from '../_models/doctor'
import { UserRole} from '../_models/userrole'

export class Login{
    id: number;
    login: string;
    password: string;
    user: User;
    doctor: Doctor;
    userRole: UserRole;
    active: boolean;
}