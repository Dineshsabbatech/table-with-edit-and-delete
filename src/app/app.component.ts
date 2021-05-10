import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';
  constructor(){
    
  }
  // getResponse($event: any) {  
  //   this.message = $event;  
  // }  
  // submit() {  
  //   this.sendName = this.firstName; 
  //   this.sendEmail = this.email;  
  //   this.sendGen = this.gender;
  //   this.message = 'Passing data from Parent to Child';
    
  // }   
}