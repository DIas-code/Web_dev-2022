import { Component, OnInit } from '@angular/core';
import {Photo} from "../models";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  // @ts-ignore
  photos: Photo[];
  // @ts-ignore
  loaded:boolean;
  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.getAlbumPhotos();
  }
  getAlbumPhotos(){
    this.albumsService.getAlbums().subscribe((photos)=>{
      this.loaded=false;
      // @ts-ignore
      this.photos=photos;
      this.loaded=true;
    })
  }
}
