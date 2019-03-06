import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'shopping';
  loadedfeature='recipe';
  onNavigte(feature:string){
    this.loadedfeature=feature;
  }
}
