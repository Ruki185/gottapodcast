import { NgModule } from '@angular/core';
import { HeaderComponent } from '@tools/header/header.component';
import { PlayerComponent } from '@tools/player/player.component';
import { MatModule } from '../mat.module';

@NgModule({
  declarations: [HeaderComponent, PlayerComponent],
  exports: [HeaderComponent, PlayerComponent],
  imports: [MatModule],
  bootstrap: [],
})
export class ToolsModule {}
