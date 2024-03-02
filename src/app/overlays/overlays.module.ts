import { NgModule } from '@angular/core';
import { ToolsModule } from '@tools/tools.module';
import { OverlayEpisodeComponent } from '@overlays/overlay-episode/overlay-episode.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [OverlayEpisodeComponent],
  exports: [],
  imports: [ToolsModule, CommonModule],
  bootstrap: [],
})
export class OverlaysModule {}
