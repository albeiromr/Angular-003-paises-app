import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector:"app-pais-input",
    templateUrl: "./pais-input.component.html"
})

export class PaisInputComponent {

    //emitiendo el value del input en un evento patra transmitir dicho valor a su
    //componente padre, udemy video 109
    @Output() onEnter:EventEmitter<string> = new EventEmitter<string>();
    
    terminoDeBusqueda: string = ""

    buscar(){
        this.onEnter.emit(this.terminoDeBusqueda);
    }
}