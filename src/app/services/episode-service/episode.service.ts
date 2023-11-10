import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  constructor() {}

  public getSummary(description: string) {
    return description?.toString().split('<br>')[0];
  }

  public getChapters(description: string): string {
    /* let chapters: string = '';
    if (description?.includes('(0:00)')) {
      chapters = description?.substring(
        description?.indexOf('(0:00)'),
        description?.indexOf('<br><br>')
      );
      chapters = chapters.substring(
        chapters?.indexOf('(0:00)'),
        description?.indexOf('(')
      );
      console.log(chapters);
      return chapters;
    } else if (description?.includes('0:00')) {
      return '2';
    } else */ return '';
    // return description?.toString().split('(0:00)').pop();
  }
}
