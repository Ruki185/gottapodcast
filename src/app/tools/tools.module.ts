import { NgModule } from '@angular/core';
import { HeaderComponent } from '@tools/header/header.component';
import { PlayerComponent } from '@tools/player/player.component';
import { MatModule } from '../mat.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeaderComponent, PlayerComponent],
  exports: [HeaderComponent, PlayerComponent],
  imports: [CommonModule, MatModule],
  bootstrap: [],
})
export class ToolsModule {}
