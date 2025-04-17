import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatCardModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword: boolean | undefined;

  constructor(private fb: FormBuilder ,private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log('Login submitted', { email, password });
      localStorage.setItem('token', 'dummy-token');
      this.router.navigate(['/admin']);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  // Utility methods for cleaner template validation checks
  isFieldInvalid(field: string): boolean {
    const control = this.loginForm.get(field);
    return control ? (control.invalid ?? false) && (control.dirty || control.touched) : false;
  }
}
