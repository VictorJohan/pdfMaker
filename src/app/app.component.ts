import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { Column, TDocumentDefinitions, TableCell } from 'pdfmake/interfaces';
import { FacturaHeader } from './interface/facturaHeader.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as Printer from './escpos';
import { PrinterEscPos } from './escposTs';
import { PrinterService } from './services/printer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  printService = inject(PrinterService);

  print() {
    this.printService.print().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      }

    });
  }

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

  impresoras: string[] = [];

  async ngOnInit() {
    // let p = new PrinterEscPos("http://127.0.0.1:5656/");

    // p.setText("Hola mundo");
    // p.printerIn('EPSON TM-T20III Receipt')
  }

  async createPDF() {


    let descripcionHeader: TableCell = {
      text: 'DESCRIPCION',
      fontSize: 9,
      bold: true,
      border: [false, false, false, false]
    };

    let precioHeader: TableCell = {
      text: 'Cant.',
      alignment: 'center',
      fontSize: 9,
      bold: true,
      border: [false, false, false, false]
    };

    let cantidadHeader: TableCell = {
      text: 'PRECIO',
      alignment: 'center',
      fontSize: 9,
      bold: true,
      border: [false, false, false, false]
    };

    let subtotalHeader: TableCell = {
      text: 'TOTAL',
      alignment: 'center',
      fontSize: 9,
      bold: true,
      border: [false, false, false, false]
    };

    const pdfDefinition: TDocumentDefinitions = {
      
      content: [

        {
          text: this.facturaHeader.nombreEmpresa,
          alignment: 'center',
          fontSize: 15,
          bold: true,
        },
        {
          text: this.facturaHeader.direccion,
          alignment: 'center',
        },
        {
          text: this.facturaHeader.telefono,
          alignment: 'center',
          fontSize: 10,

        },

        {
          columns: [

            {
              width: '50%',
              stack: [

                {
                  text: `Fecha: ${this.facturaHeader.rnc}`,
                  bold: true,
                  fontSize: 10,

                },

                {
                  text: `Venta: CRÉDITO`,
                  fontSize: 10,
                },
                {
                  text: `Nombre: ${this.facturaHeader.nombreCliente}`,
                  fontSize: 10,
                }

              ]
            }

          ],
        },


        {
          marginTop: 15,
          table: {
            // Definición de las columnas de la tabla
            headerRows: 0,
            widths: ['*', 45, 45, 45],
            body: [
              [descripcionHeader, cantidadHeader, precioHeader, subtotalHeader],
              [
                { text: '898466556', fontSize: 10, border: [false, false, false, false] },
                { text: '', alignment: 'center', fontSize: 10, border: [false, false, false, false] },
                { text: '', alignment: 'center', fontSize: 10, border: [false, false, false, false] },
                { text: '', alignment: 'center', fontSize: 10, border: [false, false, false, false] }
              ],
             
            ],

          }
        },

      ],

    }

    pdfDefinition.pageMargins = [0, 0, 0, 0];
    pdfDefinition.pageSize = 'A4';
    pdfDefinition.pageOrientation = 'portrait';


    const pdf = pdfMake.createPdf(pdfDefinition, undefined, undefined, pdfFonts.pdfMake.vfs);
    pdf.open()
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
