export interface NewsArticle {
  uuid: string;
  title: string;
  description: string;
  keywords?: string;
  snippet: string;
  url: string;
  image_url: string;
  language: string;
  published_at: string;
  source: string;
  categories: string[];
  relevance_score?: null | number;
  similar?: NewsArticle[];
}
