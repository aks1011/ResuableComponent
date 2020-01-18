import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reusable-list',
  templateUrl: './reusable-list.component.html',
  styleUrls: ['./reusable-list.component.css']
})
export class ReusableListComponent implements OnInit {

  @Input('ItemList') ItemList: any;

  constructor() { }

  ngOnInit() {
  }

}
