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
    deleteCat(id : string){
        this.cats.forEach((cat,index) =>{
            if(cat.id == id){
                this.cats.splice(index,1);
            }
        })
    }
    updateCat(id : string,name : string){
        this.cats.forEach((cat) =>{
            if(cat.id == id){
                cat.name = name;
            }
        })
    }
}
