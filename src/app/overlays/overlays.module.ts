import { NgModule } from '@angular/core';
import { ToolsModule } from '@tools/tools.module';
import { OverlayEpisodeComponent } from '@overlays/overlay-episode/overlay-episode.component';

@NgModule({
  declarations: [OverlayEpisodeComponent],
  exports: [],
  imports: [ToolsModule],
  bootstrap: [],
})
export class OverlaysModule {}
