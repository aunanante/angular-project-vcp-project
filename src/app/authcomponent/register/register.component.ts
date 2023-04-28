import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../../models/register.model'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReglogService } from 'src/app/authservice/reglog.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: RegisterModel = new RegisterModel();
  registerForm!: FormGroup;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private registlogService: ReglogService,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      contact: ['', Validators.required]
    });
  }

  onRegisterSubmit() {
    this.user = this.registerForm.value;
    console.log(this.registerForm.value);
    alert(
      this.user.firstName + ' ' +
      this.user.lastName + ' ' +
      this.user.email + ' ' +
      this.user.password + ' ' +
      this.user.contact + ' '
    );
    // const user = this.registerForm.value;
    const user = {
      "firstname": this.user.firstName,
      "lastname": this.user.lastName,
      "email": this.user.email,
      "password": this.user.password,
      "contact": this.user.contact
    };
    console.log(user);
    this.registlogService.register(user).subscribe(
      (response) => {
        console.log('Registration successful:', response);
      }
    )
  }
}
