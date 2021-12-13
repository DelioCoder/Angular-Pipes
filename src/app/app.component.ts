import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  nombre: string = 'David';
  valor : number = 1000;
  obj = {
    nombre: 'David'
  }

  constructor(private primeNgConfig: PrimeNGConfig) { }

  ngOnInit(): void {
      this.primeNgConfig.ripple = true;
  }

  mostrarNombre() {
    console.log( this.nombre );
  }

}
