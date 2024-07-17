import { Component } from '@angular/core';

interface Categoria{
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-accesos-factura',
  templateUrl: './accesos-factura.component.html',
  styleUrls: ['./accesos-factura.component.css']
})
export class AccesosFacturaComponent {

  categorias: Categoria[] = [];

  constructor() {

    this.categorias = [
      {
        id: 1,
        nombre: 'Categoría 1',
        descripcion: 'Descripción de la categoría 1',
        imagen: 'https://via.placeholder.com/150'
      },
      {
        id: 2,
        nombre: 'Categoría 2',
        descripcion: 'Descripción de la categoría 2',
        imagen: 'https://via.placeholder.com/150'
      },
      {
        id: 3,
        nombre: 'Categoría 3',
        descripcion: 'Descripción de la categoría 3',
        imagen: 'https://via.placeholder.com/150'
      },
      {
        id: 4,
        nombre: 'Categoría 4',
        descripcion: 'Descripción de la categoría 4',
        imagen: 'https://via.placeholder.com/150'
      },
      {
        id: 5,
        nombre: 'Categoría 5',
        descripcion: 'Descripción de la categoría 5',
        imagen: 'https://via.placeholder.com/150'
      },
      {
        id: 6,
        nombre: 'Categoría 6',
        descripcion: 'Descripción de la categoría 6',
        imagen: 'https://via.placeholder.com/150'
      },
      {
        id: 7,
        nombre: 'Categoría 7',
        descripcion: 'Descripción de la categoría 7',
        imagen: 'https://via.placeholder.com/150'
      },
      {
        id: 8,
        nombre: 'Categoría 8',
        descripcion: 'Descripción de la categoría 8',
        imagen: 'https://via.placeholder.com/150'
      },
      {
        id: 9,
        nombre: 'Categoría 9',
        descripcion: 'Descripción de la categoría 9',
        imagen: 'https://via.placeholder.com/150'
      },
      {
        id: 10,
        nombre: 'Categoría 10',
        descripcion: 'Descripción de la categoría 10',
        imagen: 'https://via.placeholder.com/150'
      },
      {
        id: 11,
        nombre: 'Categoría 11',
        descripcion: 'Descripción de la categoría 11',
        imagen: 'https://via.placeholder.com/150'
      }
      
    ];

   }
}
