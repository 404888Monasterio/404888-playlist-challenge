import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Album } from '../models/album';
import { Subscription } from 'rxjs';
import { AlbumApiService } from '../services/album-api.service';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-album-list',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.css',
})
export class AlbumListComponent implements OnInit, OnDestroy {
  albums: Album[] = [];
  subscriptions = new Subscription();
  
  private readonly albumService = inject(AlbumApiService);

  ngOnInit(): void {
    const getAll: Subscription = this.albumService.getAll().subscribe({
      next: (albumList: Album[]) => {
        this.albums = albumList;
      },
      error: () => {
        alert('Error al comunicarse con la API');
      }
    });

    this.subscriptions.add(getAll);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
