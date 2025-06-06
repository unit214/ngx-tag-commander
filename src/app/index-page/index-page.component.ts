import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-index-page',
  standalone: true,
  imports: [MarkdownModule, HttpClientModule],
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {
  markdown: string | undefined;
  constructor(private http: HttpClient) {}

  async ngOnInit() {
    this.markdown = await firstValueFrom(this.http.get('/assets/Documentation.md', {responseType: 'text'}));
  }
}
