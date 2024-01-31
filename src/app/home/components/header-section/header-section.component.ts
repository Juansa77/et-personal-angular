import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-header-section',
  standalone: true,
  imports: [],
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.css',
})
export class HeaderSectionComponent {
   textos:string[] = [
    'escritora',
    'vegetariana',
    'cuidadora de gatos',
    'adicta a la comida'
   ]
textToShow:string=""

constructor(){
  this.textChange()

}


  textChange() {
    let index = 0;
    setInterval(()=>{
      this.textToShow = this.textos[index];
      index = (index + 1) % this.textos.length;
      console.log(this.textToShow)
    }, 1560)

  }
}
