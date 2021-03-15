import { Injectable } from '@nestjs/common';
import {Cats} from './cats.model';
@Injectable()
export class CatsService {
    cats : Cats[] = [];

    insertCat(name : string,age : number){
        const newCat = new Cats(Date.now().toString(),name,age); 
        this.cats.push(newCat);
    }
    findAllCats(){
        return this.cats;
    }
}
