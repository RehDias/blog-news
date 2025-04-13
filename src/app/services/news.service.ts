import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsArticle } from '../models/news.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = environment.api_url

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get<any>(this.apiUrl, {
      params: {
        locale: 'br',
        language: 'pt, en',
        limit: 5,
        api_token: environment.api_token
      }
    });
  }
}
