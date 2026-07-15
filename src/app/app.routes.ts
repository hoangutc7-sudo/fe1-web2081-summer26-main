import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';
import { MyWork } from './my-work/my-work';
import { Lab41 } from './pages/lab4.1/lab4.1';
import { Lab42 } from './pages/lab4.2/lab4.2';
import { Stories } from './stories/stories';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'products', component: Products },
  { path: 'my-work', component: MyWork },
  { path: 'lab4.1', component: Lab41 },
  { path: 'lab4.2', component: Lab42 },
  { path: 'stories', component: Stories },
];