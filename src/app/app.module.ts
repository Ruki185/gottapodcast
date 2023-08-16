import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatModule } from './mat.module';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* ******* COMPONENTS ******* */
import { ScreenMainComponent } from './components/screen-main/screen-main.component';
import { OverlayEpisodeComponent } from './overlays/overlay-episode/overlay-episode.component';
import { PlayerComponent } from './tools/player/player.component';
import { HeaderComponent } from './tools/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenMainComponent,
    OverlayEpisodeComponent,
    PlayerComponent,
    HeaderComponent,
  ],
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
