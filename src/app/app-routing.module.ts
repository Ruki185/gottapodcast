import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenMainComponent } from './components/screen-main/screen-main.component';
import { OverlayEpisodeComponent } from './overlays/overlay-episode/overlay-episode.component';

const routes: Routes = [
  {
    path: 'home',
    component: ScreenMainComponent,
  },
  { path: 'episode', component: OverlayEpisodeComponent },
  {
    path: '**', // bonus: all routes not defined forward to /home
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
