import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginData } from '../../interfaces/login-data.interface';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public loginFormGroup?: FormGroup;

  constructor(private _router: Router) {
  }

  public ngOnInit(): void {
    this._initialize();
  }

  public signIn(): void {
    this._router.navigate(['projects']);
  }

  private _initialize(): void {
    this.loginFormGroup = new FormGroup<LoginData>({
      email: new FormControl('admin@bimcorpgroup.com'),
      password: new FormControl('12345678')
    })
  }
}
