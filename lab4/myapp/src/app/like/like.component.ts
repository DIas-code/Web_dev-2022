import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  likeCnt= 100;


  likeTheButton (){
      this.likeCnt++;


  }
  constructor() { }

  ngOnInit(): void {
  }

}
