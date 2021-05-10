import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface UserData {
  firstName: string;
  email: string;
  gender: string;
}
@Component({  
  selector: 'app-child',  
  templateUrl: './child.component.html',  
  styleUrls: ['./child.component.css']  
})  
export class ChildComponent implements OnInit {  
  @Input() Name : any;
  @Input() Email: any; 
  @Input() Gender: any;
  @Output() getResponse = new EventEmitter;  
  displayedColumns: string[] = ['firstName', 'email', 'gender'];
  users: UserData[] = [];
  datasource = new MatTableDataSource(this.users);

  
  
  constructor() { 
  }
  addNew(): UserData {
    const firstName = this.Name;
    const email = this.Email;
    const gender = this.Gender;
    
    return {
      firstName: firstName,
      email: email,
      gender: gender,
      
    }
  }
  ngOnInit() {    
    
  }
 
  addRow(){
    this.datasource.data.push(this.addNew());
        this.datasource.filter = "";
        console.log(this.datasource);
        console.log(this.Name);
        this.getResponse.emit('Added  Message from Child'); 
  }
  }
