import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower   : string = 'david';
  nombreUpper   : string = 'DAVID';
  nombreCompleto: string = 'DaViD';

  fecha: Date = new Date(); // El dia de hoy

}
