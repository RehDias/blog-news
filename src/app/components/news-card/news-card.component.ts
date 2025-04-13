import { Component, Input } from '@angular/core';
import { NewsArticle } from '../../models/news.model';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-card',
  imports: [RouterModule, CommonModule],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css'
})
export class NewsCardComponent {
  @Input() noticia: NewsArticle | undefined;
  isContentPage: boolean;

  constructor(private router: Router) {
    this.isContentPage = this.router.url.startsWith('/conteudo');
  }
}
