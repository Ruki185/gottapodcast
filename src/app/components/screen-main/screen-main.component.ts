import { Component, OnInit } from '@angular/core';
import { RSSService } from 'src/app/services/rss.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'screen-main',
  templateUrl: './screen-main.component.html',
  styleUrls: ['./screen-main.component.scss'],
})
export class ScreenMainComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
    private rssService: RSSService
  ) {}

  ngOnInit() {
    this.rssService.fetchFeed();
  }

  public sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  public getChapters(descr: string): string {
    return '';
  }

  get feed() {
    console.log(this.rssService.feedItems[0]);
    return this.rssService.feedItems;
  }
}
