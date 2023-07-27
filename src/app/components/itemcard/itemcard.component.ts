import { Component, Input } from '@angular/core';
import { item } from 'src/app/models/item.model';

@Component({
  selector: 'app-itemcard',
  templateUrl: './itemcard.component.html',
  styleUrls: ['./itemcard.component.css'],
})
export class ITEMCARDComponent {
  @Input()
  item!: item;

  @Input()
  cart: item[] = [];
  AddToCart() {
    let index = this.cart.findIndex((temp) => {
      return temp.id == this.item.id;
    });

    if (index != -1) {
      this.cart[index].quantity++;
      console.log(this.cart);
      return;
    }

    let newItem: item = {
      id: this.item.id,
      name: this.item.name,
      price: this.item.price,
      image: this.item.image,
      quantity: this.item.quantity,
    };
    this.cart.push(newItem);
  }
}
