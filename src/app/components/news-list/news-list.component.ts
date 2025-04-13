import { Component, OnInit } from '@angular/core';
import { NewsArticle } from '../../models/news.model';
import { NewsService } from '../../services/news.service';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from '../news-card/news-card.component';

@Component({
  selector: 'app-news-list',
  imports: [CommonModule, NewsCardComponent],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent implements OnInit {
  noticias$: NewsArticle[] = [];
  currentPage = 1;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.loadNews(this.currentPage);
  }

  loadNews(page: number): void {
    this.newsService.getNews(page).subscribe({
      next: (res) => {
        this.noticias$ = res.data;
        this.currentPage = page;
      },
      error: (err) => console.error('Erro ao carregar notícias:', err)
    });
  }

  nextPage() {
    this.loadNews(this.currentPage + 1);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.loadNews(this.currentPage - 1);
    }
  }
  

}
