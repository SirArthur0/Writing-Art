import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { WritingArt } from './writingArt.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WritingArtService {

  private url = "http://localhost:3000/writingArt"

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient
  ) { }

    fetchAll(): Observable<WritingArt[]> {
      return this.http
        .get<WritingArt[]>(this.url, { responseType: "json"})
    }

}
