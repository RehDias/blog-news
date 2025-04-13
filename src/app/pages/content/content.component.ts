import { Component } from '@angular/core';
import { NewsDetailComponent } from "../../components/news-detail/news-detail.component";

@Component({
  selector: 'app-content',
  imports: [NewsDetailComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
