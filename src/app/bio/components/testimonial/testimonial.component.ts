import { Component } from '@angular/core';
import { Ripple, initTE } from 'tw-elements';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css',
})
export class TestimonialComponent {
constructor(){
  initTE({ Ripple });
}

}
