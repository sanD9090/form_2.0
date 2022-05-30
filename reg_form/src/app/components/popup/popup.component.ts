import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegServiceService } from 'src/app/services/reg-service.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent  {
  myform: FormGroup;
  name:any="";
  result:any;
  constructor(private fb: FormBuilder,
    private router:Router, private reg:RegServiceService) { }
    
 
  ngOnInit(): void {
     this.result = this.reg.getData()
     console.log(this.result)
    

    
    this.myform = this.fb.group({
      firstname: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z ]*$'),
        ],
      ],
      lastname: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z ]*$'),
        ]]
    });
  

}
}
