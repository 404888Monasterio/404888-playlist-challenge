import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { AlbumApiService } from '../services/album-api.service';
import { Subscription } from 'rxjs';
import { Song } from '../models/song';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-music-player',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.css',
})
export class MusicPlayerComponent implements OnInit, OnDestroy {
  private readonly albumService = inject(AlbumApiService);
  private secondsInterval?: ReturnType<typeof setInterval>;

  subscription = new Subscription();
  currentSong?: Song;
  currentSeconds: number = 0;
  songs: Song[] = [];
  playing = true;

  @Input() albumId!: string;

  ngOnInit(): void {
    const addSubscription = this.albumService.getSongs(this.albumId).subscribe({
      next: (songs) => {
        this.songs = songs;
        this.songs.sort((aSong, bSong) => aSong.orderIndex - bSong.orderIndex);
        
        this.nextSong();
      },
      error: (err) => {
        if (err.status == 404)
          return;
        alert('Error al conectarse con la API.')
      }
    });
    this.subscription.add(addSubscription);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.stopInterval();
  }

  pauseInterval(){
    clearInterval(this.secondsInterval);
    this.playing = false;
  }

  stopInterval() {
    this.pauseInterval();
    this.currentSeconds = 0;
  }

  startInterval() {
    this.secondsInterval = setInterval(() => this.addSecond(), 1000);
    this.playing = true;
  }

  nextSong(){
    this.stopInterval();
    this.currentSong = this.songs.shift();
    this.startInterval();
  }

  private addSecond() {
    if (!this.currentSong)
      return;
    if (this.currentSeconds >= this.currentSong.duration)
      this.nextSong();
    this.currentSeconds++;
  }
}
