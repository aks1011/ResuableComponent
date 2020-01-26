import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  itemlist = [
    { image: './../../assets/template.jpeg', name: 'Green wallet', color: 'Green', price: '200', hasDiscount: true, discount: '20', discountedPrice: '160' },
    { image: './../../assets/template2.jpeg', name: 'Green wallet', color: 'Green', price: '200', hasDiscount: true, discount: '20', discountedPrice: '160' },
    { image: './../../assets/template.jpeg', name: 'Green wallet', color: 'Green', price: '200', hasDiscount: false, discount: '20', discountedPrice: '160' },
    { image: './../../assets/template2.jpeg', name: 'Green wallet', color: 'Green', price: '200', hasDiscount: false, discount: '20', discountedPrice: '160' },
    { image: './../../assets/template2.jpeg', name: 'Green wallet', color: 'Green', price: '200', hasDiscount: true, discount: '20', discountedPrice: '160' },
    { image: './../../assets/template.jpeg', name: 'Green wallet', color: 'Green', price: '200', hasDiscount: true, discount: '20', discountedPrice: '160' },
    { image: './../../assets/template.jpeg', name: 'Green wallet', color: 'Green', price: '200', hasDiscount: true, discount: '20', discountedPrice: '160' },
  ]
  constructor() { }

  ngOnInit() {
  }

}
