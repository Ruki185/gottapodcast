import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  exports: [MatButtonModule, MatIconModule, MatTooltipModule],
})
export class MatModule {}
