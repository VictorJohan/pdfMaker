import { Component } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { Column, TDocumentDefinitions, TableCell } from 'pdfmake/interfaces';
import { FacturaHeader } from './interface/facturaHeader.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  base64Image = '';

  facturaHeader: FacturaHeader = {
    nombreEmpresa: 'Este es el nombre de la empresa',
    rnc: '123456789',
    numeroFactura: '00001',
    direccion: 'Calle 1, #1, Santo Domingo',
    telefono: '809-000-0000',
    fecha: new Date().toLocaleDateString(),
    fechaVencimiento: '01/02/2020',
    nombreCliente: 'Cliente X',
    cedulaCliente: '000-0000000-0',
    ncf: 'B010000000000001',
    imagen: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
  };



  async createPDF() {


    let descripcionHeader: TableCell = {
      text: 'Descripción',
      border: [false, true, false, true],
      fillColor: '#4FC5F5',
      color: '#FFFFFF',
    };

    let precioHeader: TableCell = {
      text: 'Precio',
      alignment: 'center',
      border: [false, true, false, true],
      fillColor: '#4FC5F5',
      color: '#FFFFFF',
    };
    let itbisHeader: TableCell = {
      text: 'ITBIS',
      alignment: 'center',
      border: [false, true, false, true],
      fillColor: '#4FC5F5',
      color: '#FFFFFF',
    };

    let cantidadHeader: TableCell = {
      text: 'Cantidad',
      alignment: 'center',
      border: [false, true, false, true],
      fillColor: '#4FC5F5',
      color: '#FFFFFF',
    };

    let subtotalHeader: TableCell = {
      text: 'Sub-Total',
      alignment: 'center',
      border: [false, true, false, true],
      fillColor: '#4FC5F5',
      color: '#FFFFFF',
    };

    const pdfDefinition: TDocumentDefinitions = {


      content: [
        {
          columns: [
            {
              width: '50%',
              text: `Fecha: ${new Date().toLocaleDateString()}`,
              alignment: 'left'
            },
            {
              width: '50%',
              text: './src/assets/img.png',
              alignment: 'right'
            },

          ],
        },
        {
          text: this.facturaHeader.nombreEmpresa,
          alignment: 'center',
          fontSize: 20,
          bold: true,
        },
        {
          text: this.facturaHeader.direccion,
          alignment: 'center',
        },
        {
          text: this.facturaHeader.telefono,
          alignment: 'center',
          fontSize: 14,

        },
        {
          text: `RNC: ${this.facturaHeader.rnc}`,
          alignment: 'center',
          fontSize: 14,

        },

        {
          marginTop: 10,
          columns: [

            {
              width: '50%',
              style: 'border',
              stack: [

                {
                  text: 'Información del Cliente',
                  bold: true,
                  fontSize: 15,
                  decoration: 'underline',
                },
                {
                  text: `Cedula: ${this.facturaHeader.cedulaCliente}`,
                  fontSize: 14,
                  marginTop: 2
                },
                {
                  text: `Nombre: ${this.facturaHeader.nombreCliente}`,
                  fontSize: 14,
                },
              ]
            },
            {
              width: '50%',
              alignment: 'right',
              stack: [

                {
                  text: 'Información de la Factura',
                  bold: true,
                  fontSize: 15,
                  decoration: 'underline',
                },

                {
                  columns: [
                    {
                      width: '50%',
                      text: 'NCF:',
                      alignment: 'right',
                      fontSize: 14,
                      marginTop: 2
                    },
                    {
                      width: '50%',
                      alignment: 'right',
                      text: this.facturaHeader.ncf,
                      fontSize: 14,
                      marginTop: 2
                    },
                  ]
                },

                {
                  columns: [
                    {
                      width: '50%',
                      text: 'No. Factura:',
                      alignment: 'right',
                      fontSize: 14,

                    },
                    {
                      width: '50%',
                      alignment: 'right',
                      text: `${this.facturaHeader.numeroFactura}`,
                      fontSize: 14,
                    },
                  ]
                },
                {
                  columns: [
                    {
                      width: '50%',
                      text: 'Fecha:',
                      alignment: 'right',
                      fontSize: 14, marginTop: 2
                    },
                    {
                      width: '50%',
                      alignment: 'right',
                      text: this.facturaHeader.fecha,
                      fontSize: 14,
                    },
                  ]
                },
              ]
            },

          ],
        },

        {
          text: 'Factura de credito fiscal',
          alignment: 'center',
          bold: true,
          fontSize: 15,
          marginTop: 10,
        },

        {
          marginTop: 15,
          table: {
            // Definición de las columnas de la tabla
            headerRows: 1,
            widths: ['*', 80, 80, 50, 80],
            body: [
              [descripcionHeader, precioHeader, itbisHeader, cantidadHeader, subtotalHeader],
              [
                { text: 'Esta es una descripcion larga', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],
              [
                { text: 'Descripcion', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$100,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '200.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
                { text: '$200,000.00', alignment: 'center', fontSize: 12, border: [false, false, false, false] },
              ],

            ],

            // Definición de estilo de las celdas del cuerpo

          }
        },
        {
          text: '_____________________________________________________________________________',
          alignment: 'right',
        },
        {
          text: `ITBIS: 500,000.00`,
          fontSize: 14,
          alignment: 'right',
          margin: [0, 10, 0, 0]
        },
        {
          text: `Total: 500,000.00`,
          fontSize: 14,
          alignment: 'right',
          margin: [0, 10, 0, 0]
        },
        {
          text: `Efectivo: 1,000.00`,
          fontSize: 14,
          alignment: 'right',
          margin: [0, 10, 0, 0]
        },
        {
          text: `Cambio: 500,000.00`,
          fontSize: 14,
          alignment: 'right',
          margin: [0, 10, 0, 0]
        }
      ],



    }

    pdfDefinition.pageMargins = [10, 10, 10, 10];
    pdfDefinition.pageSize = 'A4';
    pdfDefinition.pageOrientation = 'portrait';






    const pdf = pdfMake.createPdf(pdfDefinition, undefined, undefined, pdfFonts.pdfMake.vfs);
    pdf.open();
  }
}

/*content: [

  {
    text: this.facturaHeader.nombreEmpresa,
    fontSize: 20,

    bold: true,
  },
  {
    text: this.facturaHeader.direccion,
  },
  {
    text: this.facturaHeader.telefono,
    fontSize: 14,

  },
  {
    text: `RNC: ${this.facturaHeader.rnc}`,
    fontSize: 14,

  },
  {
    text: `Factura: #${this.facturaHeader.numeroFactura}`,
    fontSize: 14,

  },
  {
    text: `Fecha: ${this.facturaHeader.fecha}`,
    margin:[710,-80,0,0]
  },
  {
    text: `Factura: #${this.facturaHeader.numeroFactura}`,
    fontSize: 14,

  },
  {
    table: {
      // Definición de las columnas de la tabla
      widths: ['*', 'auto', 100, '*'],
      body: [
        [productoHeader, precioHeader, cantidadHeader, totalHeader],
        ['Producto 1', '$10', 2, '$20'],

      ],
      headerRows: 1,
      // Definición de estilo de las celdas del cuerpo

    }
  },
]*/
