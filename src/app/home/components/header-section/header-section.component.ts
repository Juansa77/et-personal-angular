import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-header-section',
  standalone: true,
  imports: [],
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.css',
})
export class HeaderSectionComponent implements OnInit, OnDestroy {
  textos: string[] = ['escritora', 'vegetariana', 'gatofila'];
  public textToShow: string = '';
  public index: number = 0;
  public interval$?: Subscription;
  constructor() {}

  ngOnInit(): void {
    this.interval$ = interval(1500).subscribe(() => {
      (this.textToShow = this.textos[this.index]),
        (this.index = (this.index + 1) % this.textos.length);
      console.log(this.textToShow);
    });
  }
  ngOnDestroy(): void {
    this.interval$?.unsubscribe();
  }
}
