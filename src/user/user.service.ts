import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';  
import {User} from './user.model';
@Injectable()
export class UserService {
    constructor(@InjectModel('User')private readonly userModel : Model<User> ){}

    async insertUser(name : string, password : string){
        const newUser = new this.userModel({
            username : name,
            password : password,
        })
        const result = newUser.save();
        return newUser;
    }
}


