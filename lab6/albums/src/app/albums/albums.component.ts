import { Component, OnInit } from '@angular/core';

import {Albums} from "../fakes";
import {Album} from "../models";
import {ActivatedRoute} from "@angular/router";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[] | undefined;
  // @ts-ignore
  loaded: boolean;
  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.getAlbums();
  }
  getAlbums(){
    //@ts-ignore
    this.albumsService.getAlbums().subscribe((albums)=>{
      //@ts-ignore
      this.loaded=false;
      this.albums=albums;
      this.loaded=true;
    })
  }
  deleteAlbum(id: number){
    //@ts-ignore
    this.albums=this.albums.filter((x)=>x.id!==id)
    this.albumsService.deleteAlbum(id).subscribe(()=>{
      console.log('deleted', id);
    })
  }
}
