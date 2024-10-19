import { Routes } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';
import { SongFormComponent } from './song-form/song-form.component';
import { MusicPlayerComponent } from './music-player/music-player.component';

export const routes: Routes = [
    { path: 'albums', component: AlbumListComponent },
    { path: 'albums/:albumId/add-song', component: SongFormComponent},
    { path: 'albums/:albumId/play', component: MusicPlayerComponent},
    { path: '**', redirectTo: 'albums'}
];
