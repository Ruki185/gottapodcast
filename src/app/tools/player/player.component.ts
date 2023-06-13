import { Component, Input } from '@angular/core';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent {
  @Input() item: any;
  public audio: string;

  constructor() {
    this.audio = this.item?.url;
  }

  log(item: any) {
    console.log(item);
  }
}
