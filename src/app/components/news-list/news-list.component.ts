import { Component, OnInit } from '@angular/core';
import { NewsArticle } from '../../models/news.model';
import { NewsService } from '../../services/news.service';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from '../news-card/news-card.component';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-news-list',
  imports: [CommonModule, NewsCardComponent],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent implements OnInit {
  noticias$: NewsArticle[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    //this.newsService.getNews().subscribe({
      //next: (res) => this.noticias$ = res.data,
      //error: (err) => console.error('Erro ao carregar notícias:', err)
    //});

  }
  

}
