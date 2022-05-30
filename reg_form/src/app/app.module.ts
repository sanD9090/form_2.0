import { NgModule } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { CourseComponent } from './components/course/course.component';
import { AgGridModule } from 'ag-grid-angular';
import { GridComponent } from './components/grid/grid.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { ViewComponent } from './components/view/view.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import { PopupComponent } from './components/popup/popup.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    CourseComponent,
    GridComponent,
    ViewComponent,
    PopupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule ,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    AgGridModule,
    NgxMaterialTimepickerModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatDialogModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
