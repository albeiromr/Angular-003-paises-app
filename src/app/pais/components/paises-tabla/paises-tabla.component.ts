import { Component, Input } from "@angular/core";
import { IPais } from "../../interfaces/pais.intesface";

@Component({
    selector: "app-paises-tabla",
    templateUrl: "./paises-tabla.component.html",
    styles: [`
    .small-flag { max-width: 50px; }
    `]
})

export class PaisesTablaComponnet {
    //importando un prop desde su componente padre udemy video 108
    @Input() paises: IPais[] = [];
}