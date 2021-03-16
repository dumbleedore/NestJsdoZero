import { Body, Controller,Get,Post } from '@nestjs/common';
import {UserService} from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly UserService : UserService){       
    }
    @Post()
    insertUser(@Body('username') username : string,@Body('password')password : string){
        const user = this.UserService.insertUser(username,password);
        return user;
    }
}
