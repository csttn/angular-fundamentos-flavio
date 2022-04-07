import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, throwError } from 'rxjs';
import { IPhotoComment } from './photo.comment';
import { IPhoto } from './photo.model';

import { environment } from 'src/environments/environment';

const API_URL = environment.Apiurl;

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  listFromUSer(userName: string) {
    return this.http.get<IPhoto[]>(`${API_URL}/${userName}/photos`);
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams().append('page', page.toString());
    return this.http.get<IPhoto[]>(`${API_URL}/${userName}/photos`, {
      params,
    });
  }

  upload(description: string, allowComments: boolean, file: File) {
    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);

    return this.http.post(`${API_URL}/photos/upload`, formData, {
      observe: 'events',
      reportProgress: true,
    });
  }

  findById(photoId: number) {
    return this.http.get<IPhoto>(`${API_URL}/photos/${photoId}`);
  }

  getComments(photoId: number) {
    return this.http.get<IPhotoComment[]>(
      `${API_URL}/photos/${photoId}/comments`
    );
  }

  addComment(photoId: number, commentText: string) {
    return this.http.post(`${API_URL}/photos/${photoId}/comments`, {
      commentText,
    });
  }

  addLike(photoId: number) {
    return (
      this.http
        .post(
          `${API_URL}/photos/${photoId}/like`,
          {},
          {
            observe: 'response',
          }
        ) // conversão da resposta para um observable boolean
        .pipe(map((response) => true))
        // se der erro, e o erro for 304 (not modified), retorna false, se for diferente, retorna o erro
        .pipe(
          catchError((error) => {
            return error.status == '304' ? of(false) : throwError(error);
          })
        )
    );
  }

  removePhoto(photoId: number) {
    return this.http.delete(`${API_URL}/photos/${photoId}/like`);
  }
}
