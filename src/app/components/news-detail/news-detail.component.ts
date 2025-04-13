import { Component, Input } from '@angular/core';
import { NewsArticle } from '../../models/news.model';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from "../news-card/news-card.component";

@Component({
  selector: 'app-news-detail',
  imports: [CommonModule, NewsCardComponent],
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.css'
})
export class NewsDetailComponent {
  @Input() noticia: NewsArticle | undefined;
  @Input() similarNews: NewsArticle[] = [];

  ngOnChanges(): void {
    if (this.noticia) {
      this.similarNews = this.noticia.similar || [];
    }
  }
}
