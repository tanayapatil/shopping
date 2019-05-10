import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients:ingredient[];
  constructor(private slService:ShoppingListService) { }

  // onIngredientAdded(ingredient:ingredient){
  //   this.ingredients.push(ingredient);
  // }
  onEdit(index:number){
    this.slService.startedEditing.next(index);
  }
  ngOnInit() {
    this.ingredients=this.slService.getIngredients();
    this.slService.ingredientChanged.subscribe(
      (ingredients:ingredient[])=>{
        this.ingredients=ingredients;
      }
    );
  }

}
