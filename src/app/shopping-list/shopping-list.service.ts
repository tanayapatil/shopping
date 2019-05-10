import { ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService{
    ingredientChanged=new EventEmitter<ingredient[]>();
    startedEditing=new Subject<number>();
    ingredients:ingredient[]=[
        new ingredient('apple',5),
        new ingredient('mango',8)];
    
    getIngredients(){
        return this.ingredients.slice();
    }
    addIngredients(ingredient:ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
    addIngredient(ingredients:ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    getingredient(index:number){
        return this.ingredients[index];
    }
    updateIngredient(index:number,newIngredient:ingredient){
     this.ingredients[index]=newIngredient;
     this.ingredientChanged.emit(this.ingredients.slice());
    }

    deleteItem(index:number){
        this.ingredients.splice(index,1);
        this.ingredientChanged.emit(this.ingredients.slice());

    }
}