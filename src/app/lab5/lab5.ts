import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Story {
  id: number;
  title: string;
  author: string;
  views: number;
}

@Component({
  standalone: true,
  selector: 'app-lab5',
  imports: [CommonModule],
  templateUrl: './lab5.html',
  styleUrls: ['./lab5.css'],
})
export class Lab5 {
  stories: Story[] = [];

  loading: boolean = false;
  error: string = '';
  deletingId: number | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loading = true;

    this.http.get<Story[]>('http://localhost:3000/stories').subscribe({
      next: (data) => {
        this.stories = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Không tải được dữ liệu';
        this.loading = false;
      },
    });
  }

  deleteStory(id: number) {
    if (!confirm('Xóa không?')) return;

    this.deletingId = id;

    this.http.delete(`http://localhost:3000/stories/${id}`).subscribe({
      next: () => {
        this.stories = this.stories.filter((story) => story.id !== id);
        this.deletingId = null;
      },
      error: () => {
        this.error = 'Xóa thất bại';
        this.deletingId = null;
      },
    });
  }
}