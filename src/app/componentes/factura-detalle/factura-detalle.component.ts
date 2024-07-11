import { Component, Input } from '@angular/core';

interface Articulo {
  cantidad: number;
  descripcion: string;
  precio: number;
  tax: number;

}

@Component({
  selector: 'app-factura-detalle',
  templateUrl: './factura-detalle.component.html',
  styleUrls: ['./factura-detalle.component.css']
})
export class FacturaDetalleComponent {
  @Input() articulos: Articulo[] = [];

  constructor() {
    this.articulos = [
      {
        cantidad: 1,
        descripcion: 'Producto 1',
        precio: 100,
        tax: 0.16
      },
      {
        cantidad: 2,
        descripcion: 'Producto 2',
        precio: 200,
        tax: 0.16
      },
      {
        cantidad: 3,
        descripcion: 'Producto 3',
        precio: 300,
        tax: 0.16
      },
      {
        cantidad: 4,
        descripcion: 'Producto 4',
        precio: 400,
        tax: 0.16
      },
      {
        cantidad: 5,
        descripcion: 'Producto 5',
        precio: 500,
        tax: 0.16
      },
      {
        cantidad: 6,
        descripcion: 'Producto 6',
        precio: 600,
        tax: 0.16
      },
      {
        cantidad: 7,
        descripcion: 'Producto 7',
        precio: 700,
        tax: 0.16
      },
      {
        cantidad: 8,
        descripcion: 'Producto 8',
        precio: 800,
        tax: 0.16
      },
      {
        cantidad: 9,
        descripcion: 'Producto 9',
        precio: 900,
        tax: 0.16
      },
      {
        cantidad: 10,
        descripcion: 'Producto 10',
        precio: 1000,
        tax: 0.16
      }
    ];
  }
}
