import { Component, signal, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { NgClass, NgIf } from '@angular/common';
@Component({
  selector: 'app-reactive-forms',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    NgClass,
    NgIf
    
  ],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
  standalone: true
})
export class ReactiveFormsComponent implements OnInit {
  myForm!: FormGroup;
  formStatus = signal<string>(''); // Signal to track form status
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    });
    // Subscribe to form status changes using Signals
    this.myForm.statusChanges.subscribe(status => {
      this.formStatus.set(status);
    });
  }
  onSubmit(): void {
    if (this.myForm.valid) {
      this.formStatus.set('Form submitted successfully!');
    } else {
      this.validateAllFormFields(this.myForm);
      this.formStatus.set('Form contains errors.');
    }
  }
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else {
        if (control) {
          control.markAsTouched();
        }
      }
    });
  }
}