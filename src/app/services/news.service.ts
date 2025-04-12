import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'https://api.thenewsapi.com/v1/news/top'

  constructor(private http: HttpClient) { }

  getTopNews(): Observable<any> {
    return this.http.get(this.apiUrl, {
      params: {
        locale: 'br'
      }
    });
  }
}
