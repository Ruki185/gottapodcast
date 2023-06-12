import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent {
  @Input() item: any;
  audio: string;

  constructor() {
    this.audio = '';
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['item']) {
    }
  }

  playEpisode(episode: { name: string; src: string }): void {
    this.audio = episode.src;
  }
}
