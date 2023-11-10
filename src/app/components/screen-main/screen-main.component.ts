//import { singleEpisode } from './../../domain/episodes.d';
import { Component, OnInit } from '@angular/core';
import { RSSService } from 'src/app/services/rss-service/rss.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OverlayEpisodeComponent } from 'src/app/overlays/overlay-episode/overlay-episode.component';

@Component({
  selector: 'screen-main',
  templateUrl: './screen-main.component.html',
  styleUrls: ['./screen-main.component.scss'],
})
export class ScreenMainComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
    private rssService: RSSService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.rssService.fetchFeed();
  }

  public sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  public getChapters(descr: string): string {
    // TODO this needs to be in overlay-episode
    return '';
  }

  public openEpisode(item: any): void {
    if (item) {
      const dialogRef = this.dialog.open(OverlayEpisodeComponent, {
        width: '50%',
        data: { item: item },
      });
      dialogRef.afterClosed().subscribe((result) => {});
    }
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
