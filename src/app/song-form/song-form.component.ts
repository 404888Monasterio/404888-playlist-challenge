import { NgClass } from '@angular/common';
import { Component, inject, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Song } from '../models/song';
import { AlbumApiService } from '../services/album-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-song-form',
  standalone: true,
  imports: [RouterLink, NgClass, ReactiveFormsModule],
  templateUrl: './song-form.component.html',
  styleUrl: './song-form.component.css',
})
export class SongFormComponent implements OnDestroy {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    duration: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(300)]),
    orderIndex: new FormControl(0, [Validators.required]),
    createdAt: new FormControl(new Date(), [Validators.required]),
    user: new FormControl('user')
  });
  private readonly albumService = inject(AlbumApiService);
  private readonly router = inject(Router);
  @Input() albumId!: string;

  subscription = new Subscription();

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  post() {
    if (this.form.invalid)
      return alert('Formulario inválido');
    
    const song = this.form.value as Song;
    
    const addSubsciption = this.albumService.addSong(this.albumId, song).subscribe({
      next: () => {
        this.router.navigate(['albums']);
      },
      error: () => {
        alert('Error al comunicarse con la API');
      }
    });
    this.subscription.add(addSubsciption);
  }
}
