import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/demo/domain/product';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  products: Product[];
	
	responsiveOptions;

	constructor() { 
		this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
	}

	ngOnInit() {
		 
			this.products = this.products = [
        {
          "id": "1000",
          "code": "f230fh0g3",
          "name": "Super 5",
          "description": "voiture",
          "image": "bamboo-watch.jpg",
          "price":  6500,
          "category": "Ben arous",
          "quantity": 24,
          "inventoryStatus": "28/10/2020",
          "rating": 5
        },
        {
          "id": "1000",
          "code": "f230fh0g3",
          "name": "Super 5",
          "description": "voiture",
          "image": "bamboo-watch.jpg",
          "price":  6500,
          "category": "Ben arous",
          "quantity": 24,
          "inventoryStatus": "28/10/2020",
          "rating": 5
        },
        {
          "id": "1000",
          "code": "f230fh0g3",
          "name": "Super 5",
          "description": "voiture",
          "image": "bamboo-watch.jpg",
          "price":  6500,
          "category": "Ben arous",
          "quantity": 24,
          "inventoryStatus": "28/10/2020",
          "rating": 5
        },
        {
          "id": "1000",
          "code": "f230fh0g3",
          "name": "Super 5",
          "description": "voiture",
          "image": "bamboo-watch.jpg",
          "price":  6500,
          "category": "Ben arous",
          "quantity": 24,
          "inventoryStatus": "28/10/2020",
          "rating": 5
        },{
          "id": "1000",
          "code": "f230fh0g3",
          "name": "Super 5",
          "description": "voiture",
          "image": "bamboo-watch.jpg",
          "price":  6500,
          "category": "Ben arous",
          "quantity": 24,
          "inventoryStatus": "28/10/2020",
          "rating": 5
        },
        {
          "id": "1000",
          "code": "f230fh0g3",
          "name": "Super 5",
          "description": "voiture",
          "image": "bamboo-watch.jpg",
          "price":  6500,
          "category": "Ben arous",
          "quantity": 24,
          "inventoryStatus": "28/10/2020",
          "rating": 5
        },
        {
          "id": "1000",
          "code": "f230fh0g3",
          "name": "Super 5",
          "description": "voiture",
          "image": "bamboo-watch.jpg",
          "price":  6500,
          "category": "Ben arous",
          "quantity": 24,
          "inventoryStatus": "28/10/2020",
          "rating": 5
        },
        {
          "id": "1000",
          "code": "f230fh0g3",
          "name": "Super 5",
          "description": "voiture",
          "image": "bamboo-watch.jpg",
          "price":  6500,
          "category": "Ben arous",
          "quantity": 24,
          "inventoryStatus": "28/10/2020",
          "rating": 5
        },{
          "id": "1000",
          "code": "f230fh0g3",
          "name": "Super 5",
          "description": "voiture",
          "image": "bamboo-watch.jpg",
          "price":  6500,
          "category": "Ben arous",
          "quantity": 24,
          "inventoryStatus": "28/10/2020",
          "rating": 5
        },
        {
          "id": "1000",
          "code": "f230fh0g3",
          "name": "Super 5",
          "description": "voiture",
          "image": "bamboo-watch.jpg",
          "price":  6500,
          "category": "Ben arous",
          "quantity": 24,
          "inventoryStatus": "28/10/2020",
          "rating": 5
        },
        {
          "id": "1000",
          "code": "f230fh0g3",
          "name": "Super 5",
          "description": "voiture",
          "image": "bamboo-watch.jpg",
          "price":  6500,
          "category": "Ben arous",
          "quantity": 24,
          "inventoryStatus": "28/10/2020",
          "rating": 5
        },
        {
          "id": "1000",
          "code": "f230fh0g3",
          "name": "Super 5",
          "description": "voiture",
          "image": "bamboo-watch.jpg",
          "price":  6500,
          "category": "Ben arous",
          "quantity": 24,
          "inventoryStatus": "28/10/2020",
          "rating": 5
        }];
	 
    }
    
}
