import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  whiskas:string="assets/images/whiskas.png";
  whiskassmall:string="assets/images/whiskassmall.png";
  toggle = true;
  status = "Enable";
  counter=0;
  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? "Enable" : "Disable";
  }

  increment(){
    this.counter++;
  }
  decrement(){
    if(this.counter!=0)
    this.counter--;
  }
  addItem() {
    localStorage.setItem('counter', JSON.stringify(this.counter));
  }
  reset(){
    this.counter=0;
    localStorage.setItem('counter', JSON.stringify(this.counter));
  }

  
}
