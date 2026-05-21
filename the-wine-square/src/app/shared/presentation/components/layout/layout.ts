import {Component, signal} from '@angular/core';
import {RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {FooterContent} from '../footer-content/footer-content';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    RouterLinkActive,
    FooterContent,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

  options = signal([
    { path: '/home', title: 'Home' },
    //{ path: '/preservation/items/new', title: 'New Preservation Item' }
  ]);
}
