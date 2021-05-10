import { Component, OnInit, Input, Output, EventEmitter, ViewChild, Inject, Optional } from '@angular/core';
import { MatTable } from '@angular/material/table';
export interface UserData {
  id: number;
  firstName: string;
  email: string;
  gender: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'email', 'gender', 'action'];
  users: UserData[] = [];
  datasource = this.users;

  values: string[] = ['Male', 'Female'];
  id: number = 0;
  firstName: string;
  email: string;
  gender: string;
  i: number = 1;
  @ViewChild(MatTable, { static: true })
  table!: MatTable<any>;
  constructor() {
    this.firstName = '';
    this.email = '';
    this.gender = '';
  }
  ngOnInit() {

  }
  addRow() {
    if (this.id !== 0) {
      this.datasource = this.datasource.filter((value, key) => {
        if (value.id == this.id) {
          value.firstName = this.firstName;
          value.email = this.email;
          value.gender = this.gender;
        }
        this.id= 0;
        this.firstName = '';
      this.email = '';
      this.gender = '';
        return true;
      });
    }
    else {
      this.i = this.i;
      this.datasource.push({
        id: this.i++,
        firstName: this.firstName,
        email: this.email,
        gender: this.gender
      });
      this.table.renderRows();
      this.firstName = '';
      this.email = '';
      this.gender = '';
    }
  }
  updateRow(row_obj: any) {
    this.firstName = row_obj.firstName;
    this.email = row_obj.email;
    this.gender = row_obj.gender;
    this.id = row_obj.id;
  }
  deleteRow(row_obj: any) {
    this.datasource = this.datasource.filter((value, key) => {
      return value.id != row_obj.id;
    });
  }
}
