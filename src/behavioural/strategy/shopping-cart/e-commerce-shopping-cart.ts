import { ECommerceProductProtocol } from './e-commerce-product-protocol';
import { DiscountStrategy } from './discount-strategy';

export class ECommerceShoppingCart {
  private _products: ECommerceProductProtocol[] = [];
  private _discountStrategy: DiscountStrategy = new DiscountStrategy();

  addProduct(...products: ECommerceProductProtocol[]): void {
    products.forEach((product) => this._products.push(product));
  }

  getProducts(): ECommerceProductProtocol[] {
    return this._products;
  }

  getTotal(): number {
    return this._products.reduce((sum, product) => sum + product.price, 0);
  }

  getTotalWithDiscount(): number {
    return this._discountStrategy.getDiscount(this);
  }

  set discount(discount: DiscountStrategy) {
    this._discountStrategy = discount;
  }
}
