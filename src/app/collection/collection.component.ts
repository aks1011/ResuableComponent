import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  category = ['DBFW', 'SGFW', 'CRHD', 'BELT', 'CMST', 'ACSS'];
  itemlist = [];
  dataList = [
    { image: './../../assets/d1.jpg', name: 'Deepika Padukone', color: 'Green', price: '200', hasDiscount: true, discount: '20', discountedPrice: '160', category: this.category[0] },
    { image: './../../assets/d2.jpg', name: 'Deepika Padukone', color: 'Green', price: '200', hasDiscount: true, discount: '20', discountedPrice: '160', category: this.category[1] },
    { image: './../../assets/d3.jpg', name: 'Deepika Padukone', color: 'Green', price: '200', hasDiscount: true, discount: '20', discountedPrice: '160', category: this.category[2] },
    { image: './../../assets/d4.jpg', name: 'Deepika Padukone', color: 'Green', price: '200', hasDiscount: true, discount: '20', discountedPrice: '160', category: this.category[3] },
    { image: './../../assets/d5.jpg', name: 'Deepika Padukone', color: 'Green', price: '200', hasDiscount: true, discount: '20', discountedPrice: '160', category: this.category[4] },
    { image: './../../assets/d6.jpg', name: 'Deepika Padukone', color: 'Green', price: '200', hasDiscount: true, discount: '20', discountedPrice: '160', category: this.category[5] },
    { image: './../../assets/d7.jpg', name: 'Deepika Padukone', color: 'Green', price: '200', hasDiscount: true, discount: '20', discountedPrice: '160', category: this.category[0] },
    { image: './../../assets/d8.jpg', name: 'Deepika Padukone', color: 'Green', price: '200', hasDiscount: true, discount: '20', discountedPrice: '160', category: this.category[1] },
    { image: './../../assets/d9.jpg', name: 'Deepika Padukone', color: 'Green', price: '200', hasDiscount: true, discount: '20', discountedPrice: '160', category: this.category[2] },
    { image: './../../assets/d10.jpg', name: 'Deepika Padukone', color: 'Green', price: '200', hasDiscount: true, discount: '20', discountedPrice: '160', category: this.category[3] },
    { image: './../../assets/d11.jpg', name: 'Deepika Padukone', color: 'Green', price: '200', hasDiscount: true, discount: '20', discountedPrice: '160', category: this.category[4] },
    { image: './../../assets/d12.jpg', name: 'Deepika Padukone', color: 'Green', price: '200', hasDiscount: true, discount: '20', discountedPrice: '160', category: this.category[5] },
    { image: './../../assets/d13.jpg', name: 'Deepika Padukone', color: 'Green', price: '200', hasDiscount: true, discount: '20', discountedPrice: '160', category: this.category[0] },
    { image: './../../assets/d14.jpg', name: 'Deepika Padukone', color: 'Green', price: '200', hasDiscount: true, discount: '20', discountedPrice: '160', category: this.category[1] },
    { image: './../../assets/d15.jpg', name: 'Deepika Padukone', color: 'Green', price: '200', hasDiscount: true, discount: '20', discountedPrice: '160', category: this.category[2] },
    { image: './../../assets/d16.jpg', name: 'Deepika Padukone', color: 'Green', price: '200', hasDiscount: true, discount: '20', discountedPrice: '160', category: this.category[3] },
    { image: './../../assets/d17.jpg', name: 'Deepika Padukone', color: 'Green', price: '200', hasDiscount: true, discount: '20', discountedPrice: '160', category: this.category[4] },
    { image: './../../assets/d18.jpg', name: 'Deepika Padukone', color: 'Green', price: '200', hasDiscount: true, discount: '20', discountedPrice: '160', category: this.category[5] },
    { image: './../../assets/d19.jpg', name: 'Deepika Padukone', color: 'Green', price: '200', hasDiscount: true, discount: '20', discountedPrice: '160', category: this.category[0] },
    { image: './../../assets/d20.jpg', name: 'Deepika Padukone', color: 'Green', price: '200', hasDiscount: true, discount: '20', discountedPrice: '160', category: this.category[1] },
  ];

  constructor(private route: ActivatedRoute) {
    this.route.queryParams
      .subscribe(params => {
        if (params) {
          this.itemlist = this.dataList.filter(
            item => item.category === params.category);
        } 
      });
  }

  ngOnInit() {
    this.itemlist = this.dataList;
  }

}
