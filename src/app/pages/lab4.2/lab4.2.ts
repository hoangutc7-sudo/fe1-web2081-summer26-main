import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-lab42',
  imports: [ReactiveFormsModule],
  templateUrl: './lab4.2.html',
  styleUrl: './lab4.2.css',
})
export class Lab42 {
  addForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Bài 3
  get password() {
    return this.addForm.get('password');
  }

  submitForm() {
    console.log(this.addForm.value);
  }
}