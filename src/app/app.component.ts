import { Component, Input, SimpleChanges,OnChanges, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'task-landingpage-angular';
  logo:string="assets/images/logo.png";
  typewriter:string="assets/images/typewriter.png";
  
  productpage = new ProductComponent;
  @Input() counter = this.productpage.counter;
  

  getItems() {
    return JSON.parse(localStorage.getItem('counter')!);
  }
  
  constructor (private router:Router){}

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
}
