import { Injectable } from '@angular/core';
import * as xml2js from 'xml2js';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RSSService {
  private feedUrl: string = '../../assets/gottapodcast.xml';
  public feedItems: any[] = [];

  constructor(private http: HttpClient) {}

  public fetchFeed(): void {
    this.http.get(this.feedUrl, { responseType: 'text' }).subscribe((data) => {
      xml2js.parseString(data, (err, result) => {
        if (err) {
          console.error(err);
        } else {
          this.feedItems = result.rss.channel[0].item;
        }
      });
    });
  }

  get feed(): any[] {
    console.log(this.feedItems);
    return this.feedItems;
  }
}
