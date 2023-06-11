import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'overlay-episode',
  templateUrl: './overlay-episode.component.html',
  styleUrls: ['./overlay-episode.component.scss'],
})
export class OverlayEpisodeComponent {
  @Input() item: any;
}
