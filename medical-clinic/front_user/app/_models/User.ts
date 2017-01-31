import { Login } from '../_models/login';
import * as moment from 'moment';

export class User{
    id: number;
  
    firstName: string;
    lastName: string;
  
    email: string;
    pesel: string;
    dateOfBirth: moment.Moment;

    streetName: string;
    streetNumber: string;
    homeNumber: string;
    postcode: string;
    city: string;
}