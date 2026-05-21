import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer-content',
  standalone: true,

  imports: [MatToolbarModule],
  templateUrl: './footer-content.html',
  styleUrl: './footer-content.css'
})
export class FooterContent {}
