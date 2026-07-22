import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-lab41',
  imports: [ReactiveFormsModule],
  templateUrl: './lab4.1.html',
  styleUrls: ['./lab4.1.css'],
})
export class Lab41 {
  addForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      category: ['', Validators.required],
    });
  }

  submitForm() {
    console.log(this.addForm.value);
  }
}