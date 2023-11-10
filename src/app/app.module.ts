import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* ******* MODULES ******* */
import { ComponentsModule } from '@components/components.module';
import { OverlaysModule } from '@overlays/overlays.module';
import { ServicesModule } from '@services/services.module';
import { ToolsModule } from '@tools/tools.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    OverlayModule,
    OverlaysModule,
    ServicesModule,
    ToolsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
