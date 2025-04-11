import { NgClass, NgIf } from '@angular/common';
import { Component, signal, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-template-driven-form',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    NgIf,
    FormsModule,
    NgClass,
  ],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent implements AfterViewInit, OnInit  {
   formStatus = signal<string>('');
   @ViewChild(NgForm) ngForm!: NgForm;
   ngAfterViewInit(): void {
    setTimeout(() => {
      console.log(this.ngForm);
      this.ngForm.statusChanges?.subscribe((status) => {
        console.log('Form Status:', status);
        this.formStatus.set(status);
      }
      );
      this.ngForm.control.valueChanges?.subscribe((value) => { 
        console.log('Form Value:', value);
        console.log('Value:', this.ngForm.value);
        console.log('Valid:', this.ngForm.valid);
        console.log('Invalid:', this.ngForm.invalid);
        console.log('Touched:', this.ngForm.touched);
        console.log('Dirty:', this.ngForm.dirty);
        console.log('Pristine:', this.ngForm.pristine);
        console.log('Controls:', this.ngForm.controls);
        console.log('Control:', this.ngForm.control);
        console.log('Control Value:', this.ngForm.control.value);
        console.log('Control Valid:', this.ngForm.control.valid);
        
      });
    }, 1000);
        
  } 
  ngOnInit(): void {
    this.ngForm.control.valueChanges?.subscribe((value) => {
      console.log('Form Value:', value);
      console.log(this.ngForm);
      console.log('Value:', this.ngForm.value);
      console.log('Valid:', this.ngForm.valid);
      console.log('Invalid:', this.ngForm.invalid);
      console.log('Touched:', this.ngForm.touched);
      console.log('Dirty:', this.ngForm.dirty);
      console.log('Pristine:', this.ngForm.pristine);
      console.log('Controls:', this.ngForm.controls);
      console.log('Control:', this.ngForm.control);
      console.log('Control Value:', this.ngForm.control.value);
      console.log('Control Valid:', this.ngForm.control.valid);
    }
    );
  }
  onTemplateSubmit(form: NgForm): void {
    console.log(form);
    if (form.valid) {
      console.log(form.value);
      this.formStatus.set('Form submitted successfully!');
    } else {
      this.formStatus.set('Form contains errors.');
    }
  }

}
