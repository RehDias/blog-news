import { Component } from '@angular/core';
import { NewsArticle } from '../../models/news.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from '../../components/news-card/news-card.component';

@Component({
  selector: 'app-content',
  imports: [CommonModule, RouterModule, NewsCardComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  uuid!: string;
  similarNews: NewsArticle[] = [];
  currentPage: number = 1;
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private newsService: NewsService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.uuid = params['uuid'];
      this.loadSimilarNews();
    });
  }

  loadSimilarNews(): void {
    this.newsService.getSimilarNews(this.uuid, this.currentPage).subscribe({
      next: res => {
        this.similarNews = res.data;
        if (this.similarNews.length === 0) {
          this.errorMessage = 'Nenhuma notícia similar encontrada.';
        }
        this.loading = false;
      },
      error: err => {
        console.error('Erro ao carregar notícias similares:', err);
        this.errorMessage = 'Erro ao carregar notícias similares.';
        this.similarNews = [];
        this.loading = false;
      }
    });
  }

  nextPage(): void {
    this.currentPage++;
    this.loadSimilarNews();
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadSimilarNews();
    }
  }
}
