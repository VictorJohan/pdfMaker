import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PrintRequest } from '../interface/printRequest.interface';

@Injectable({
  providedIn: 'root'
})
export class PrinterService {

  http = inject(HttpClient);

  print() {
    return this.http.post('http://localhost:5000/printer/imprimir', <PrintRequest>{})
  }
}
