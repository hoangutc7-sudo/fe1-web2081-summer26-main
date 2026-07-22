import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StoryService } from '../services/story-service';


@Component({
  standalone: true,
  selector: 'app-add-story',
  imports: [ReactiveFormsModule],
  templateUrl: './add-story.html',
  styleUrls: ['./add-story.css'],
})
export class AddStory {
  addForm: FormGroup;

  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private storyService: StoryService
  ) {
    this.addForm = this.fb.group({
      title: ['', Validators.required],
      author: [''],
      views: [0],
    });
  }

  submitForm() {
    if (this.addForm.invalid) return;

    this.loading = true;
    this.error = '';

    this.storyService.addStory(this.addForm.value).subscribe({
      next: () => {
        this.loading = false;
        alert('Thêm thành công');
        this.addForm.reset({
          title: '',
          author: '',
          views: 0,
        });
      },
      error: () => {
        this.loading = false;
        this.error = 'Có lỗi xảy ra!';
      },
    });
  }
}