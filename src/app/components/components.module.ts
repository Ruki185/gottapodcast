import { NgModule } from '@angular/core';
import { MatModule } from '../mat.module';
import { ScreenMainComponent } from '@components/screen-main/screen-main.component';

@NgModule({
  declarations: [ScreenMainComponent],
  exports: [],
  imports: [MatModule],
  bootstrap: [],
})
export class ComponentsModule {}
