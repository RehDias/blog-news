import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = environment.api_url

  constructor(private http: HttpClient) { }

  getNews(page: number = 1): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/all', {
      params: {
        locale: 'br',
        language: 'pt, en',
        page: page.toString(),
        api_token: environment.api_token
      }
    });
  }

  getSimilarNews(uuid: string, page: number = 1, limit: number = 3): Observable<any> {
    return this.http.get<any>(this.apiUrl + `/similar/${uuid}`, {
      params: {
        api_token: environment.api_token,
        page: page.toString(),
        limit: limit.toString(),
      }
    });
  }
}
