import { Routes } from '@angular/router';
import { Home } from './LAB1/home/home';
import { About } from './LAB1/about/about';
import { Products } from './LAB2/products/products';
import { Lab4 } from './lab4/lab4';
import { Lab41 } from './lab4/lab4.1/lab4.1';
import { Lab42 } from './lab4/lab4.2/lab4.2';
import { Lab5 } from './lab5/lab5';
import { Stories } from './stories/stories';
import { AddStory } from './add-story/add-story';
import { AddProduct } from './pages/add-product/add-product';
import { EditStory } from './edit-story/edit-story';
import { Lab2 } from './LAB2/lab2';
import { Home as Lab2Home } from './LAB2/home/home';
import { About as Lab2About } from './LAB2/about/about';
import { Contact as Lab2Contact } from './LAB2/contact/contact';
import { Products as Lab2Products } from './LAB2/products/products';
import { Lab3 } from './lab3/lab3';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'lab1', component: About },
  { path: 'about', component: About },
  {
    path: 'lab2',
    component: Lab2,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Lab2Home },
      { path: 'about', component: Lab2About },
      { path: 'contact', component: Lab2Contact },
      { path: 'products', component: Lab2Products },
    ],
  },  { path: 'lab3', component: Lab3 },  { path: 'products', component: Products },
  {
    path: 'lab4',
    component: Lab4,
    children: [
      { path: '', redirectTo: '4.1', pathMatch: 'full' },
      { path: '4.1', component: Lab41 },
      { path: '4.2', component: Lab42 },
    ],
  },
  { path: 'lab5', component: Lab5 },
  { path: 'stories', component: Stories },
  { path: 'add-story', component: AddStory },
  { path: 'add-product', component: AddProduct },
  { path: 'edit-story', component: EditStory },
];