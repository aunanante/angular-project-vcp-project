import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LoginModel } from '../../models/login.model'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReglogService } from '../../authservice/reglog.service';
import { IamloggedService } from '../../authservice/iamlogged.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: LoginModel = new LoginModel();
  loginForm!: FormGroup;
  hide = true;
  @Output() isLoggedIn = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder,
    private registlogService: ReglogService,
    private iamloggedService: IamloggedService,
    private router: Router
    
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    });
  }

  onLoginSubmit() {
    console.log(this.loginForm.value)
    this.user = this.loginForm.value;
    alert(
      this.user.email + ' ' +
      this.user.password
    );

    const user = {
      "email": this.user.email,
      "password": this.user.password,
    };

    
    this.registlogService.login(user).subscribe(
      (response: any) => {
        // Store the access token in local storage or a cookie
        localStorage.setItem('accessToken', response.access_token);
        
        this.isLoggedIn.emit(true);
        // Redirect the user to the app
        
        this.router.navigate(['/add-ville']);
        
        this.iamloggedService.isLoggedIn = true;
        console.log('Registration successful:', response);
      },
      (error) => {
        // Display an error message to the user
        console.log('Invalid email or password');
      }
    );
  }

}
