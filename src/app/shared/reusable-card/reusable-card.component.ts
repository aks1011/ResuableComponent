import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reusable-card',
  templateUrl: './reusable-card.component.html',
  styleUrls: ['./reusable-card.component.css']
})
export class ReusableCardComponent implements OnInit {

  @Input('ItemList') ItemList: any;
  constructor() { }

  ngOnInit() {
  }

}
