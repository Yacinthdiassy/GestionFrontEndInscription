import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TalentService {
  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTalents() {
    return this.http.get(`${this.uri}/api/v1/talents`);
  }
  getTalentById (id) {
    return this.http.get(`${this.uri}/api/v1/talents/${id}`);
  }
  addTalent(prenom, nom, sexe, tel, adresse) {
    const talent = {
      prenom: prenom,
      nom: nom,
      sexe: sexe,
      tel: tel,
      adresse: adresse
    };
    return this.http.post(`${this.uri}/api/v1/talents`, talent);
  }
  updateTalent(id, prenom, nom, sexe, tel, adresse) {
    const talent = {
      prenom: prenom,
      nom: nom,
      sexe: sexe,
      tel: tel,
      adresse: adresse
    };
    return this.http.put(`${this.uri}/api/v1/talents/${id}`, talent);
  }
 deleteTalent(id) {
   return this.http.delete(`${this.uri}/api/v1/talents/${id}`);
 }
}
