import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) {


  }
  devolverPersona(tipodoc: string, dni: string, fec_nac: string) {
    return this.http.get<any>('http://' + environment.ip + '/persona/paciente/tipodoc/' + tipodoc + '/numerodoc/' + dni + '/fecha_nacimiento/' + fec_nac)
  }
  guardarPersona(person: any) {

    return this.http.post('http://' + environment.ip + '/persona/pacientenuevo/', person);
  }
  devolverPersonaPaciente(tipodoc: String, num_doc: String) {

    return this.http.get<any>('http://' + environment.ip + '/persona/paciente/tipodoc/' + tipodoc + '/numerodoc/' + num_doc)

  }
  devolverPersonaTrabajador(num_doc) {
    return this.http.get<any>(environment.url_backend + 'persona/' + num_doc)

  }
  actualizarPersona(numdoc: string, apellido_pat: string, apellido_mat: string, nombres: string, direccion: string) {
    return this.http.post<any>(environment.url_backend + 'persona/actualiza/' + numdoc, {
      NOMBRES: nombres,
      APELLIDO_PAT: apellido_pat,
      APELLIDO_MAT: apellido_mat,
      DIRECCION: direccion
    })
  }
  buscarPersona(bod: any) {
    return this.http.post<any>(environment.url_backend + 'persona/busqueda', bod)
  }

  getPersonaDescripcion(NRO_DOCUMENTO: string) {
    return this.http.get<any>(environment.url_backend + 'persona/persona-descripcion/' + NRO_DOCUMENTO);
  }


}
