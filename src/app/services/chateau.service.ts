import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Chateau} from "../../DTO/Chateau";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChateauService {

  constructor(private http: HttpClient) { }



  addChateau(chateau : Chateau){
    return this.http.post(
      "http://localhost:8080/chateau/",
      {
        "name" : chateau.name,
        "numero_adresse" : chateau.numero_adresse,
        "code_postal" : chateau.code_postal,
        "adresse" : chateau.adresse ,
        "responsable" : chateau.responsable
      }
    )
  }

  listChateau() : Observable<Chateau[]>{
    return this.http.get<Chateau[]>("http://localhost:8080/chateau/")
  }

  getChateauId(chateau_id : number) : Observable<Chateau>{
    return this.http.get<Chateau>("http://localhost:8080/chateau/" + chateau_id)
  }

}