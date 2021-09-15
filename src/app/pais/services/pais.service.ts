import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPais } from "../interfaces/pais.intesface";

@Injectable()

export class PaisService {

    endpoint:string = "https://restcountries.eu/rest/v2"

    constructor(private http: HttpClient){}

    buscarPorPais(terminoDeBusqued:string):Observable<IPais[]>{
        const url: string = `${this.endpoint}/name/${terminoDeBusqued}`; 

        //Enviando un observable como retorno para que sus componentes que tienen
        //este servicio  lo consumann, UDEMY video número 104 SERVICIO PARA BUSCAR PAIS
        return this.http.get<IPais[]>( url );
    }

    buscarPorCapital(terminoDeBusqued:string):Observable<IPais[]>{
        const url: string = `${this.endpoint}/capital/${terminoDeBusqued}`; 

        return this.http.get<IPais[]>( url );
    }

}