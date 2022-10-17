import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valor1: number;
  valor2: number;
  resultado: number;

  constructor() {}

  calcularSuma() {
    this.resultado = this.valor1 + this.valor2;
  }
  calcularResta() {
    this.resultado = this.valor1 - this.valor2;
  }
  calcularDivision() {
    this.resultado = this.valor1 / this.valor2;
  }

  calcularMultiplicacion() {
    this.resultado = this.valor1 * this.valor2;
  }

  reinicia() {
    this.valor1 = null;
    this.valor2 = null;
    this.resultado = null;
  }
}
