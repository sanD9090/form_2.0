import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reg_form';

  links = [

    {path:'',label:'Home'},
    {path:'registration',label:'Registration'},
    {path:'student',label:'Student'},
    {path:'courses',label:'Courses'},
    {path:'aggrid',label:'AG-Grid'},
  ];
  activeLink = this.links[0];
}

//json-server --watch db.json
