import { HttpErrorResponse } from "@angular/common/http";

import {Component} from "@angular/core";

import { IPais } from "../../interfaces/pais.intesface";

import { PaisService } from "../../services/pais.service";


@Component({
    selector: "app-por-capital",
    templateUrl: "./por-capital.component.html"
})

export class PorCapitalComponent {
    terminoDeBusqueda:string = "";
    hayError:boolean = false;
    paises:IPais[] = [];

    constructor(private paisService: PaisService){}

    buscar(terminoDeBusqueda: string):void{

        this.hayError = false;
        this.terminoDeBusqueda = terminoDeBusqueda;

        //consumiento el ovservable que me está enviando el servicio
        //desde su función buscar país, UDEMY video número 104 SERVICIO PARA BUSCAR PAIS
        this.paisService.buscarPorCapital(terminoDeBusqueda)
            .subscribe((response:IPais[]) => {this.paises = response}, (error: HttpErrorResponse) => {
                this.hayError = true;
                this.paises = [];
            });
    }

    sugerencias(valorScrito: string): void{
        this.hayError = false;
    }
}