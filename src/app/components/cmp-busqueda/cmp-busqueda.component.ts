// @ts-check
import { Component, OnInit } from '@angular/core';
import { BusquedaServicio } from 'src/app/services/busqueda-service.service';
import { BusquedaInt } from 'src/app/interfaces/BusquedaInt';

@Component({
  selector: 'app-cmp-busqueda',
  templateUrl: './cmp-busqueda.component.html',
  styleUrls: ['./cmp-busqueda.component.scss']
})
export class CmpBusquedaComponent implements OnInit {

  resultadoBusqueda: BusquedaInt;
  queryBusqueda: string;

  constructor(private ServicioBuscarService: BusquedaServicio) {}

  ngOnInit(): void {
    this.busquedaGit('uady');
  }

  realizarBusqueda = () => {
    this.resultadoBusqueda = null;
    this.busquedaGit(this.queryBusqueda);
  }

  busquedaGit = (query: string) => {
    this.ServicioBuscarService.buscar(query).then( (response) => {
      this.resultadoBusqueda = response
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }

}
