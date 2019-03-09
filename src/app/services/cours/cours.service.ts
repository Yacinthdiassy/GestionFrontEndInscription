import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCours() {
    return this.http.get(`${this.uri}/api/v1/cours`);
  }
  getCoursById (id) {
    return this.http.get(`${this.uri}/api/v1/cours/${id}`);
  }
  addCours(prenom, nom, description) {
    const cours = {
      nom: nom,
      description: description,
    };
    return this.http.post(`${this.uri}/api/v1/cours`, cours);
  }
  updateCours(id, nom, description) {
    const cours = {
      nom: nom,
      description: description,
    };
    return this.http.put(`${this.uri}/api/v1/cours/${id}`, cours);
  }
 deleteCours(id) {
   return this.http.delete(`${this.uri}/api/v1/cours/${id}`);
 }
}
