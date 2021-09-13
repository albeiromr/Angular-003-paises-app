import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { PorCapitalComponent } from "./pages/por-capital/por-capital.component";
import { PorPaisComponent } from "./pages/por-pais/por-pais.component";
import { PorRegionComponent } from "./pages/por-region.component.ts/por-region.component";
import { VerPaisComponent } from "./pages/ver-pais/ver-pais.component";
import { PaisesTablaComponnet } from "./components/paises-tabla/paises-tabla.component";
import { PaisInputComponent } from "./components/pais-input/pais-input.component";

import { PaisService } from "./services/pais.service";




@NgModule({
    declarations:[
        PorCapitalComponent,
        PorPaisComponent,
        PorRegionComponent,
        VerPaisComponent,
        PaisesTablaComponnet,
        PaisInputComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule
    ],
    exports:[
        PorCapitalComponent,
        PorPaisComponent,
        PorRegionComponent,
        VerPaisComponent,
        PaisesTablaComponnet
    ],
    providers:[
        PaisService
    ]
})

export class PaisesModule {

}