import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-avatar',
  templateUrl: './table-avatar.component.html',
  styleUrls: ['./table-avatar.component.css']
})
export class TableAvatarComponent implements OnInit {
 @Input() src: string
 @Input() agee: number
  constructor() { 
    this.src = '';
    this.agee = 0;
  }
   
  ngOnInit(): void {
  }

}
