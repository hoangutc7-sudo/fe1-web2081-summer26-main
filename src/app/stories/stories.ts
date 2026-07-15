import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Story {
  id: number;
  title: string;
  author: string;
  views: number;
}

@Component({
  selector: 'app-stories',
  imports: [CommonModule],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories implements OnInit {
  stories: Story[] = [];

  loading: boolean = false;
  error: string = '';
  deletingId: number | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loading = true;

    this.http.get<Story[]>('http://localhost:3000/stories').subscribe({
      next: (data) => {
        this.stories = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Không thể tải danh sách!';
        this.loading = false;
      },
    });
  }

  deleteStory(id?: number): void {
    if (!id) return;

    this.deletingId = id;

    this.http.delete(`http://localhost:3000/stories/${id}`).subscribe({
      next: () => {
        this.stories = this.stories.filter((story) => story.id !== id);
        this.deletingId = null;
      },
      error: () => {
        alert('Xóa thất bại!');
        this.deletingId = null;
      },
    });
  }
}