import {Component, OnInit} from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { switchMap } from "rxjs/operators"

import { IPais } from "../../interfaces/pais.intesface";
import { PaisService } from "../../services/pais.service";

@Component({
    selector: "app-ver-pais",
    templateUrl: "./ver-pais.component.html"
})

export class VerPaisComponent implements OnInit {

    pais!: IPais;

    constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService){}

    ngOnInit(){
        //generando un callback hell con observables
        /* this.activatedRoute.params
            .subscribe(({ idPais }) => {
                this.paisService.buscarPorCodigo(idPais)
                    .subscribe( pais => {
                        console.log(pais)
                    })
            }) */

        //usando el operador switchmap para evitar callback hell con observables
        this.activatedRoute.params
            .pipe(switchMap(params => this.paisService.buscarPorCodigo(params.idPais)))
            .subscribe(pais => this.pais = pais);
    }
}