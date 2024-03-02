import { NgModule } from '@angular/core';
import { MatModule } from '../mat.module';
import { ScreenMainComponent } from '@components/screen-main/screen-main.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ScreenMainComponent],
  exports: [],
  imports: [MatModule, CommonModule],
  bootstrap: [],
})
export class ComponentsModule {}
