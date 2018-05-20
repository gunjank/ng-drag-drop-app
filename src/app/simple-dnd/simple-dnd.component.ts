import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-dnd',
  templateUrl: './simple-dnd.component.html',
  styleUrls: ['./simple-dnd.component.css']
})
export class SimpleDndComponent implements OnInit {

  simpleDrop: any = null;
  availableProducts: Array<Product> = [];
    shoppingBasket: Array<Product> = [];
    constructor() {
      this.availableProducts.push(new Product('Blue Shoes', 3, 35));
      this.availableProducts.push(new Product('Good Jacket', 1, 90));
      this.availableProducts.push(new Product('Red Shirt', 5, 12));
      this.availableProducts.push(new Product('Blue Jeans', 4, 60));
  }

  orderedProduct($event: any) {
      let orderedProduct: Product = $event.dragData;
      orderedProduct.quantity--;
  }

  addToBasket($event: any) {
      let newProduct: Product = $event.dragData;
      for (let indx in this.shoppingBasket) {
          let product: Product = this.shoppingBasket[indx];
          if (product.name === newProduct.name) {
              product.quantity++;
              return;
          }
      }
      this.shoppingBasket.push(new Product(newProduct.name, 1, newProduct.cost));
      this.shoppingBasket.sort((a: Product, b: Product) => {
          return a.name.localeCompare(b.name);
      });
  }

  totalCost(): number {
      let cost: number = 0;
      for (let indx in this.shoppingBasket) {
          let product: Product = this.shoppingBasket[indx];
          cost += (product.cost * product.quantity);
      }
      return cost;
  }

  ngOnInit() {
  }

}

class Product {
  constructor(public name: string, public quantity: number, public cost: number) {}
}
