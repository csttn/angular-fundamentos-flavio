import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPhoto } from './photo.model';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  listFromUSer(userName: string) {
    return this.http.get<IPhoto[]>(`http://localhost:3000/${userName}/photos`);
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams().append('page', page.toString());
    return this.http.get<IPhoto[]>(`http://localhost:3000/${userName}/photos`, {
      params,
    });
  }
}
