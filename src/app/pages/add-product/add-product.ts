import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.html',
  styleUrls: ['./add-product.css'],
})
export class AddProduct {
  addForm: FormGroup;

  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.addForm = this.fb.group({
      name: '',
      price: '',
    });
  }

  submitForm() {
    this.loading = true;
    this.error = '';

    this.http
      .post('http://localhost:3000/products', this.addForm.value)
      .subscribe({
        next: () => {
          this.loading = false;
          alert('Thêm thành công');
          this.addForm.reset();
        },
        error: () => {
          this.loading = false;
          this.error = 'Có lỗi xảy ra';
        },
      });
  }
}