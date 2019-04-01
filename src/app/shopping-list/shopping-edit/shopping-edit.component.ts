import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

// import { Ingredient } from '../../../shared/ingredient.model';
import { ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild ('nameInput') nameInputRef:ElementRef;
 @ViewChild ('amountInput') amountInputRef:ElementRef;
//  @Output() ingredientAdded=new EventEmitter<ingredient>();
  constructor( private slService:ShoppingListService) { }
  onAddItem(){
    const ingname=this.nameInputRef.nativeElement.value;
    const ingamount=this.amountInputRef.nativeElement.value;
    const newIngredient= new ingredient(ingname,ingamount);
    this.slService.addIngredients(newIngredient);
    // this.ingredientAdded.emit(newIngredient);
  }
  ngOnInit() {
  }

}
