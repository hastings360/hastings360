import {
  Component,
  Input,
  HostBinding
} from '@angular/core';
import { Product } from '../product.model';

/**
 * @ProductImage: A component to show a single Product's image
 */
@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'ui small image';
}