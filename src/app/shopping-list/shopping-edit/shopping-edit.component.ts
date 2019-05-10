import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter, OnDestroy } from '@angular/core';

// import { Ingredient } from '../../../shared/ingredient.model';
import { ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('f') slForm:NgForm;
  subcription:Subscription;
  editmode=false;
  editedItemNumber:number;
  editeditem:ingredient;
//  @ViewChild ('nameInput') nameInputRef:ElementRef;
//  @ViewChild ('amountInput') amountInputRef:ElementRef;
//  @Output() ingredientAdded=new EventEmitter<ingredient>();
  constructor( private slService:ShoppingListService) { }
  onAddItem(form:NgForm){
    // const ingname=this.nameInputRef.nativeElement.value;
    // const ingamount=this.amountInputRef.nativeElement.value;
    const value=form.value;
    const newIngredient= new ingredient(value.name,value.amount);
    if(this.editmode){
      this.slService.updateIngredient(this.editedItemNumber,newIngredient)
    }else{
      this.slService.addIngredients(newIngredient);
    }
    this.editmode=false;
    form.reset();
    
    // this.ingredientAdded.emit(newIngredient);
  }
  ngOnInit() {
   this. subcription=this.slService.startedEditing.subscribe(
     (index:number)=>{
       this.editmode=true;
       this.editedItemNumber=index;
       this.editeditem=this.slService.getingredient(index);
       this.slForm.setValue({
         name:this.editeditem.name,
         amount:this.editeditem.amount
       })

     }
   );
  }

  ngOnDestroy(){
    this.subcription.unsubscribe();
  }

  onClear(){
    this.slForm.reset();
    this.editmode=false;
  }
  onDelete(){
    this.slService.deleteItem(this.editedItemNumber);
    this.onClear();
  }

}
