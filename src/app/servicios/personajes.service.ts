import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personaje } from '../modelos/personaje.model';

const baseURL = 'http://localhost:3000/personajes'

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  private apiUrl = 'http://localhost:3000/personajes';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Personaje[]>
  {
    return this.http.get<Personaje[]>(baseURL);
  }

  get(id: any): Observable<Personaje>
  {
    return this.http.get<Personaje>(`${baseURL}/${id}`);
  }

 createPersonaje(data: any): Observable<any> {
    const createUrl = `${this.apiUrl}/create`;
    return this.http.post(createUrl, data);
  }

  update(id: any, data: any): Observable<any>
  {
    return this.http.put(`${baseURL}/${id}`, data);
  }

  delete(id: any): Observable<any>
  {
    return this.http.delete(`${baseURL}/${id}`);
  }

  deleteAll(): Observable<any>
  {
    return this.http.delete(baseURL);
  }

  findByName(name: any): Observable<Personaje[]>
  {
    return this.http.get<Personaje[]>(`${baseURL}?name=${name}`);
  }
}