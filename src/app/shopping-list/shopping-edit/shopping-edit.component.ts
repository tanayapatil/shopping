import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

// import { Ingredient } from '../../../shared/ingredient.model';
import { ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild ('nameInput') nameInputRef:ElementRef;
 @ViewChild ('amountInput') amountInputRef:ElementRef;
 @Output() ingredientAdded=new EventEmitter<ingredient>();
  constructor() { }
  onAddItem(){
    const ingname=this.nameInputRef.nativeElement.value;
    const ingamount=this.amountInputRef.nativeElement.value;
    const newIngredient= new ingredient(ingname,ingamount);
    this.ingredientAdded.emit(newIngredient);
  }
  ngOnInit() {
  }

}
