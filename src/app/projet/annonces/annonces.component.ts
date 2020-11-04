import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Product } from 'src/app/demo/domain/product';
import { AppMainComponent } from 'src/app/layouts/full/app.main.component';
import { BreadcrumbService } from 'src/app/shared/breadcrumb/breadcrumb.service';
 
  
 

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss']
})
export class AnnoncesComponent implements OnInit {

  products: Product[];

  sortOptions: SelectItem[];
  activeItem: number;
  sortOrder: number;

  sortField: string;

  constructor( private breadcrumbService: BreadcrumbService , public app: AppMainComponent ) {
      this.breadcrumbService.setItems([
          {label: 'Dashboard'},
          {label: 'Control Center', routerLink: ['/']}
      ]);
  }
 

  mobileMegaMenuItemClick(index) {
      this.app.megaMenuMobileClick = true;
      this.activeItem = this.activeItem === index ? null : index;
  }
  ngOnInit() {
    this.products = [
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
];

      this.sortOptions = [
          {label: 'Price High to Low', value: '!price'},
          {label: 'Price Low to High', value: 'price'}
      ];

      
  }
  onSortChange(event) {
      let value = event.value;

      if (value.indexOf('!') === 0) {
          this.sortOrder = -1;
          this.sortField = value.substring(1, value.length);
      }
      else {
          this.sortOrder = 1;
          this.sortField = value;
      }
  }
}
