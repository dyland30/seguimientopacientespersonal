import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-historial-atencion',
  templateUrl: './historial-atencion.component.html',
  styleUrls: ['./historial-atencion.component.css']
  
})
export class HistorialAtencionComponent implements OnInit {
  atenciones

  id_persona
  constructor() { }

  ngOnInit() {


  }

  cargarAtenciones(){

  }
  sortOptions: SelectItem[];

    sortKey: string;

    sortField: string;

    sortOrder: number;
  selectCar($event,car){

  }
  onSortChange(){}
}
