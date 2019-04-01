import { Recipe } from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import { ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected=new EventEmitter<Recipe>();
    private recipes:Recipe[]=[new Recipe('The test','this is simplytesty','https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg',
    [new ingredient('meat',1),
new ingredient('french roll',20)]),
    new Recipe('second','this is second','https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg',
    [new ingredient('buns',2),
new ingredient('bread',2)])];
    
   constructor(private slService:ShoppingListService){}
    getRecipes(){
        return this.recipes.slice();
    } 
    getRecipe(index:number){
        return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients:ingredient[]){
         this.slService.addIngredient(ingredients)
    }
}

