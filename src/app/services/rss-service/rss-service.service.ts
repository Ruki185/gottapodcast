import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RssServiceService {

  constructor(private http: HttpClient) { }

  public getRSSData(): void {
    this.http.get<any>("https://iz28j1.podcaster.de/gottapodcast.rss");
  }
}
