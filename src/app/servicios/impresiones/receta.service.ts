import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as FileSaver from 'file-saver';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  url

  constructor(private http: HttpClient) { }


  async mostrarReceta(datosfuat: any) {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/pdf' })
    };

    await this.http.post('http://hospitalvirtual.diresacajamarca.gob.pe:8088/receta/ver', datosfuat, { responseType: 'arraybuffer' }
    ).subscribe(
      (datos) => {
        console.log(datosfuat)
        var blob = new Blob([datos], { type: 'application/pdf' });
        var filename = 'RECETA.pdf';
        FileSaver.saveAs(blob, filename);
        this.url = URL.createObjectURL(blob)
        return 'se imprimio'
      });


  }
  verReceta(ID_ATENCION: number) {
    this.http.get(environment.url_backend + 'receta/ver/' + ID_ATENCION,{ responseType: 'arraybuffer' }).subscribe(
      (datos) => {
        var blob = new Blob([datos], { type: 'application/pdf' });
        var filename = 'RECETA.pdf';
        FileSaver.saveAs(blob, filename);
        this.url = URL.createObjectURL(blob)
        return 'se imprimio'
      });
  }
  guardarReceta(receta) {
    return this.http.post(environment.url_backend + 'receta/crear', receta);
  }
}