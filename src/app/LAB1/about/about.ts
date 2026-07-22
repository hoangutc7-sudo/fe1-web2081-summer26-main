import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class About {
  name = 'Nguyen Van A';
  age = 25;

  handleClick() {
    alert('Bạn đã click button');
  }
}