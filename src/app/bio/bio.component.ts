import { Component } from '@angular/core';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { BioCardComponent } from './components/bio-card/bio-card.component';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [GalleryComponent, TestimonialComponent, BioCardComponent],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.css'
})
export class BioComponent {

}
