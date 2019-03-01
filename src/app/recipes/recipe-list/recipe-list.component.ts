import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
    recipes:Recipe[]=[new Recipe('The test','this is simplytesty','https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg'),
    new Recipe('The test','this is simplytesty','https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg')];
  constructor() { }

  ngOnInit() {
  }

}
