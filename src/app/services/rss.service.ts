import { singleEpisode } from '../domain/episodes.domain';
import { Injectable } from '@angular/core';
import * as xml2js from 'xml2js';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class RSSService {
  private feedUrl: string = '../../assets/gottapodcast.xml';
  //private feedUrl: string = 'http://localhost:4200/rss/gottapodcast.rss';
  public feedItems: any[] = [];
  public generalData: singleEpisode[] = [];

  constructor(private http: HttpClient) {}

  public fetchFeed(): void {
    this.http.get(this.feedUrl, { responseType: 'text' }).subscribe((data) => {
      xml2js.parseString(data, (err, result) => {
        if (err) {
          console.error(err);
        } else {
          this.feedItems = result.rss.channel[0].item;
          this.feedItems.forEach((x) => {
            this.generalData.push({
              episodeNr: x['itunes:episode'],
              title: x.title,
              description: x.description,
              year: Number(formatDate(new Date(x.pubDate), 'YYYY', 'en')),
              date: x.pubDate,
              imageUrl: x['itunes:image'][0]['$'].href,
              link: x.link,
              author: x.author,
            });
          });
        }
      });
    });
  }

  get years(): number[] {
    let years: number[] = [];
    this.feedItems
      .map((x) => x.pubDate)
      .forEach((x) => {
        x = formatDate(new Date(x), 'YYYY', 'en');
        if (!years.includes(Number(x))) {
          years.push(Number(x));
        }
      });
    return years.sort((a, b) => b - a);
  }
}
