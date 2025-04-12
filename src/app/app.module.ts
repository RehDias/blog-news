import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { ContentComponent } from './pages/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { AppRoutingModule } from './app.routes';

@NgModule({
  // ...
  imports: [
    BrowserModule,
    AppComponent,
    HomeComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    NewsCardComponent,
    NewsDetailComponent,
    NewsListComponent,
    AppRoutingModule
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AppModule {}
