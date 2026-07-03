import { Component } from '@angular/core';

interface Story {
  title: string;
  author: string;
  year: number;
  genre: string;
  image: string;
  views: number;
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  name = 'Nguyen Van A';
  age = 25;

  stories: Story[] = [
    {
      title: 'Dragon Ball',
      author: 'Akira Toriyama',
      year: 1984,
      genre: 'Shonen, Hành động',
      image: 'https://via.placeholder.com/80x80?text=Dragon+Ball',
      views: 120000
    },
    {
      title: 'Attack On Titan',
      author: 'Hajime Isayama',
      year: 2009,
      genre: 'Hành động, Kinh dị',
      image: 'https://via.placeholder.com/80x80?text=Attack+On+Titan',
      views: 95000
    },
    {
      title: 'Bleach',
      author: 'Tite Kubo',
      year: 2001,
      genre: 'Shonen, Hành động',
      image: 'https://via.placeholder.com/80x80?text=Bleach',
      views: 88000
    }
  ];

  handleClick() {
    alert('Bạn đã click button');
  }
}