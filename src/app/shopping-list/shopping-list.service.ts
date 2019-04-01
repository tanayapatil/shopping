import { ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    ingredientChanged=new EventEmitter<ingredient[]>();
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
}