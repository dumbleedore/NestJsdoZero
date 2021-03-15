import { Body, Controller,Get,Post } from '@nestjs/common';

import {CatsService} from './cats.service';

@Controller('cats')
export class CatsController {
constructor(private readonly catsService : CatsService){
}
@Get()
findCats(){
    return this.catsService.findAllCats();
}
@Post('addCat') // ADD CAT
insertCat(@Body('name')name : string,@Body('age')age : number ){
    return this.catsService.insertCat(name,age);
}

}
