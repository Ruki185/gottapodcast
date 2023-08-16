import { EpisodeService } from './../../services/episode.service';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'overlay-episode',
  templateUrl: './overlay-episode.component.html',
  styleUrls: ['./overlay-episode.component.scss'],
})
export class OverlayEpisodeComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private episodeService: EpisodeService
  ) {}

  ngOnInit() {}

  get title(): string {
    return this.data.item?.title;
  }

  get imageUrl(): string {
    return this.data.item?.imageUrl;
  }

  get summary(): string {
    return this.episodeService.getSummary(this.data.item?.description['0']);
  }

  get chapters(): string {
    return this.episodeService.getChapters(this.data.item?.description['0']);
  }
}
