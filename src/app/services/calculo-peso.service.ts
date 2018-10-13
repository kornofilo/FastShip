import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculoPesoService {
  pesoDimensional: number;
  constructor() { }

  getPesoDimensional(tamCubico) {
    this.pesoDimensional = tamCubico / 5000;
    if ((this.pesoDimensional % 1) === 0) {
      return this.pesoDimensional;
    } else if ((this.pesoDimensional  % 1) >= 0.5) {
       return this.pesoDimensional.toFixed(1);
    } else {
      return this.pesoDimensional - (this.pesoDimensional % 1) + 0.5;
    }
  }
}
