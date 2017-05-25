import { Component, EventEmitter, Input, Output} from '@angular/core';

import { Product } from './../product.model';

/**
 * @ProductsList: A component for rendering all ProductRows and
 * storing the currently selected Product
 */
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  private currentProduct: Product;

  //Sets currentProduct and emits product that was clicked on
  clicked(product: Product): void{
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  //Returns true if product sku matches currentProduct sku
  isSelected(product: Product): boolean{
    if(!product || !this.currentProduct){
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

  //@input productList - the Product[]
  @Input() productList: Product[];

  //@output onProductSelected - outputs current Product whenever selected
  @Output() onProductSelected: EventEmitter<Product>;

    constructor(){
      this.onProductSelected = new EventEmitter();
    }
}
