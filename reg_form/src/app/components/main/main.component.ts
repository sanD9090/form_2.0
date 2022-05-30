import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegServiceService } from 'src/app/services/reg-service.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  country = ['India', 'Australia', 'Iceland', 'Hungary'];
  myform: FormGroup;
  constructor(
    private fb: FormBuilder,
    private reg_ser: RegServiceService ,
    private router:Router ) {}

  public showPassword: boolean = false;
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  add() {
    this.reg_ser.register(this.myform.value).subscribe({
      next: (res) => {
        alert('profile saved');
        window.location.reload();
      },
      error: () => {
        console.log('Error in saving');
      },
    });
  }
  ngOnInit(): void {
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
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      country: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      dob: ['', [Validators.required]],
      file: [''],
    });
  }
}
