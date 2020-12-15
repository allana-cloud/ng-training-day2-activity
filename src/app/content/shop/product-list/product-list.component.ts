import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [
    {
      id: 1,
      name: 'Katol',
      description: 'pampa high',
      price: 'PHP 1.25',
      image: 'data:image/jpeg;base64,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'
    },
    {
      id: 2,
      name: 'Pako',
      description: 'pang pok pok',
      price: 'PHP 5.50',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADHQ50IErytrAy2r-FoNJ1xXQO8Y69BrTNA&usqp=CAU'
    },
    {
      id: 1,
      name: 'Cement',
      description: 'pang construction',
      price: 'PHP 320.00',
      image: 'data:image/jpeg;base64,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'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
