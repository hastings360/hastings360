import { Component, EventEmitter} from '@angular/core';

import { Product } from './product.model';

/** top-level inventory app */
@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  products: Product[];

  productWasSelected(product: Product): void{
    console.log('Product clicked: ', product);
  }
    constructor(){
        this.products = [
            new Product(
              '1234124jke',
              'Nike Swish Running Shoe',
              'assets/images/products/black-shoes.jpg',
              ['Men','Shoes','Running Shoes'],
              109.99
            ),
            new Product(
              '123oafsef',
              'Suade jacket',
              'assets/images/products/blue-jacket.jpg',
              ['Women','Apparel','Jackets & Vests'],
              230.89
            ),
            new Product(
              'jkj15329',
              'Black Adidas Hat',
              'assets/images/products/black-hat.jpg',
              ['Men','Accessories','Hats'],
              25.99
            )
        ];
    }
}
