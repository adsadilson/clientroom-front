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

  findAll(): Observable<Room[]> {
    const url = `${this.baseUrl}/rooms`;
    console.log(url);
    return this.http.get<Room[]>(url);
  }

}
