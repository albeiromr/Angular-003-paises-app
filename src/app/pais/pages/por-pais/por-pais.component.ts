import { HttpErrorResponse } from "@angular/common/http";
import {Component} from "@angular/core";

import { IPais } from "../../interfaces/pais.intesface";

import { PaisService } from "../../services/pais.service";

@Component({
    selector: "app-por-pais",
    templateUrl: "./por-pais.component.html",
})

export class PorPaisComponent {

    terminoDeBusqueda:string = "";
    hayError:boolean = false;
    paises:IPais[] = [];

    constructor(private paisService: PaisService){}

    buscar(terminoDeBusqueda: string):void{

        this.hayError = false;
        this.terminoDeBusqueda = terminoDeBusqueda;

        //consumiento el ovservable que me está enviando el servicio
        //desde su función buscar país, UDEMY video número 104 SERVICIO PARA BUSCAR PAIS
        this.paisService.buscarPais(terminoDeBusqueda)
            .subscribe((response:IPais[]) => {this.paises = response}, (error: HttpErrorResponse) => {
                this.hayError = true;
                this.paises = [];
            });
    }
}