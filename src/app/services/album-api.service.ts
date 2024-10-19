import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../models/album';
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class AlbumApiService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly url = 'https://6713e711690bf212c760261d.mockapi.io/albums';
  
  constructor() { }

  getAll(): Observable<Album[]> {
    return this.http.get<Album[]>(this.url);
  }

  addSong(albumId: string, song: Song): Observable<Song> {
    return this.http.post<Song>(`${this.url}/${albumId}/songs`, song);
  }

  getSongs(albumId: string): Observable<Song[]> {
    return this.http.get<Song[]>(`${this.url}/${albumId}/songs`);
  }
}
