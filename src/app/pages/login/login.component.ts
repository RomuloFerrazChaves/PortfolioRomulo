import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm: FormGroup;

  constructor(
    private FormBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
  ) {}


  ngOnInit():void {
    this.initFormLogin();
  }


  initFormLogin() {
    this.loginForm = this.FormBuilder.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      error: (error: any) => {
        console.log('error: ', error)
      },
      next: (response: any) => {
        console.log('response', response)
      }

    })
  }

  navigate() {
    this.router.navigateByUrl('/signup')
  }

}
