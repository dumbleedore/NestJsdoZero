import { Body, Controller,Get,Post,Delete} from '@nestjs/common';

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
@Delete('removecat') // REMOVE CAT
removeCat(@Body('id')id : string){
    return this.catsService.deleteCat(id);
}
@Post('updateCat') // UPDATE CAT
updateCat(@Body('id')id : string,@Body('name') name : string){
    return this.catsService.updateCat(id,name);
}
}
