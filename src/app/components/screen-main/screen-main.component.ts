//import { singleEpisode } from './../../domain/episodes.d';
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

  public openEpisode(item: any) {
    // TODO
    console.log(this.rssService.feedItems[0]);
    console.log(this.feed[0]);
  }

  public sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  public getChapters(descr: string): string {
    // TODO this needs to be in overlay-episode
    return '';
  }

  public getTitle(item: any) {
    return item?.title;
  }

  public getNumberOfEpisodes(year: number) {
    return this.rssService.generalData.filter((x) => x.year === year).length;
  }

  get years(): number[] {
    return this.rssService.years;
  }

  get feed() {
    //console.log(this.rssService.feedItems);
    //console.log(this.rssService.generalData);
    return this.rssService.generalData;
  }
}
