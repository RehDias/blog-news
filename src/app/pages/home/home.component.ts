import { Component } from '@angular/core';
import { NewsListComponent } from '../../components/news-list/news-list.component';

@Component({
  selector: 'app-home',
  imports: [NewsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
