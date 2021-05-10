import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatTableModule, MatTable } from '@angular/material/table';

import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { TableComponent } from './table/table.component';
@NgModule({
  declarations: [
    ChildComponent,
    AppComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatDividerModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTableModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
