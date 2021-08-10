import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Room } from '../entity/Room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Room[]> {
    const url = `${this.baseUrl}/rooms`;
    console.log(url);
    return this.http.get<Room[]>(url);
  }

  buscarPorId(id: String): Observable<Room> {
    const url = `${this.baseUrl}/rooms/${id}`
    return this.http.get<Room>(url);
  }

  excluir(id: String): Observable<void> {
    const url = `${this.baseUrl}/rooms/${id}`
    console.log("ID " + url);
    return this.http.delete<void>(url);
  }

}
