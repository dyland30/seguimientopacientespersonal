import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AtencionDetalle } from '../interfaces/atencion-detalle';
import { Diagnostico } from '../interfaces/diagnostico';
import { AtencionDiagnosticoItem } from '../interfaces/atencion-diagnostico-item';

@Injectable({
  providedIn: 'root'
})
export class AtencionService {

  constructor(private http: HttpClient) {


  }
  registrar(aten: any) {

    return this.http.post<any>(environment.ipmicroservicios + 'atenciones/registrar/', { root: aten });
  }
  registrarExamenfis(examen: any, id_atencion: string, id_trabajador: string) {

    return this.http.post(environment.ipmicroservicios + 'atenciones/examenes/', { root: { "examenes": examen, "id_atencion": id_atencion, "id_trabajador": id_trabajador } });
  }
  registrarAtencionDetalle(detallea:AtencionDetalle,id_atencion: string, id_trabajador: string){
    return this.http.post(environment.ipmicroservicios + 'atenciones/detalle/', { root: { "detalle": detallea, "id_atencion": id_atencion, "id_trabajador": id_trabajador } });

  }
  registrarAtencionDiagnosticos(diagnosticos:AtencionDiagnosticoItem[],id_atencion: string, id_trabajador: string){
    return this.http.post(environment.ipmicroservicios + 'atenciones/diagnosticos/', { root: { "diagnosticos": diagnosticos, "id_atencion": id_atencion, "id_trabajador": id_trabajador } });

  }


}
