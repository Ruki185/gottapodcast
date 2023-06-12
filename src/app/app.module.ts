import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatModule } from './mat.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* ******* COMPONENTS ******* */
import { ScreenMainComponent } from './components/screen-main/screen-main.component';
import { OverlayEpisodeComponent } from './overlays/overlay-episode/overlay-episode.component';
import { PlayerComponent } from './tools/player/player.component';

@NgModule({
  declarations: [AppComponent, ScreenMainComponent, OverlayEpisodeComponent, PlayerComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MatModule,
    OverlayModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
