import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
    selector:"app-pais-input",
    templateUrl: "./pais-input.component.html"
})

export class PaisInputComponent implements OnInit{

    //emitiendo el value del input en un evento patra transmitir dicho valor a su
    //componente padre, udemy video 109
    @Output() onEnter:EventEmitter<string> = new EventEmitter<string>();

    //evento para el debounce, udemy video 110
    @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>();
    //evento para el debounce, udemy video 110
    debouncer: Subject<string> = new Subject();
    
    terminoDeBusqueda: string = ""

    //evento para el debounce, udemy video 110
    ngOnInit(){
        this.debouncer
        .pipe(debounceTime(300))
        .subscribe(valor => {this.onDebounce.emit(valor)})
    }

    teclaPresionada(){
        this.debouncer.next(this.terminoDeBusqueda);
    }

    buscar(){
        this.onEnter.emit(this.terminoDeBusqueda);
    }

    
}