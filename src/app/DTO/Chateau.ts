import { LatLng } from "ngx-google-places-autocomplete/objects/latLng";
import { User } from "./User";

export interface Chateau {

  id : number;
  name : string;
  numeroAdresse : number ;
  adresse : string ;
  ville : string ;
  codePostal : number ;
  lat : number;
  lng : number
  localisation : string ;
  description : string;
  responsable : User;
}
