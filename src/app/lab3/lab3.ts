import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-lab3',
  imports: [],
  templateUrl: './lab3.html',
  styleUrls: ['./lab3.css'],
})
export class Lab3 {
  stories = [
    {
      title: 'Dragon Ball',
      author: 'Akira Toriyama',
      year: 1984,
      genre: 'Action',
      views: 100000,
      image:
        'https://upload.wikimedia.org/wikipedia/en/c/c9/DB_Tank%C5%8Dbon.png',
    },
    {
      title: 'Attack On Titan',
      author: 'Hajime Isayama',
      year: 2009,
      genre: 'Action',
      views: 95000,
      image:
        'https://upload.wikimedia.org/wikipedia/en/7/70/Shingeki_no_Kyojin_manga_volume_1.jpg',
    },
    {
      title: 'Bleach',
      author: 'Tite Kubo',
      year: 2001,
      genre: 'Action',
      views: 85000,
      image:
        'https://upload.wikimedia.org/wikipedia/en/7/72/Bleachanime.png',
    },
  ];
}