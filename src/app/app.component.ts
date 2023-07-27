import { Component } from '@angular/core';
import {item} from './models/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstProject';
  listItems: item[] = [
    {
      "id":"001",
      "quantity":10,
      "image": "https://www.durexvietnam.vn/cdn/shop/products/Durex_Invisible_ExtraLube_10pk-new1_f2534b7d-656d-4c8e-9ab3-18c0736739e4_540x.png?v=1624867686",
      "name": "Bao Cao Su Durex Invinsible Extra Thin, Extra Lubricated Hộp 10 Cái",
      "price": 1000
  },{
      "id":"002",
      "quantity":3,
      "image": "https://www.durexvietnam.vn/cdn/shop/products/RB_Durex_Invisible_ExtraThin_10pk_new1_bd427760-ad73-4652-b472-3254c012d534_540x.png?v=1592438119",
      "name": "Bao Cao Su Durex Invisible Extra Thin Extra Sensitive Hộp 10 Cái",
      "price": 2000
  },{
      "id":"003",
      "quantity":7,
      "image": "https://www.durexvietnam.vn/cdn/shop/products/RB_Durex_Invisible_ExtraSensitive_3pk_RBL1912482_Front_VIETNAM_v1_0f21e136-35d9-4f6e-8f44-31f34cea2325_540x.jpg?v=1592438128",
      "name": "Bao Cao Su Durex Invisible Extra Thin Extra Sensitive Hộp 3 Cái",
      "price": 3000
  },{
      "id":"004",
      "quantity":3,
      "image": "https://www.durexvietnam.vn/cdn/shop/products/RB_Durex_ThinFeel_Fetherlite_Ultima_12pk_new1_1f746025-809f-46ff-9717-e5e5ede2a3fc_540x.png?v=1592438130",
      "name": "Bao cao su Durex Fetherlite Ultima Hộp 12 Cái",
      "price": 4000
  },{
      "id":"005",
      "quantity":5,
      "image": "https://www.durexvietnam.vn/cdn/shop/products/RB_Durex_ThinFeel_FetherliteUltima_3pk_5038483492901_Front_Vietnam_540x.jpg?v=1592438125",
      "name": "Bao Cao Su Durex Fetherlite Ultima Hộp 3 Cái",
      "price": 5000
  },{
      "id":"006",
      "quantity":20,
      "image": "https://www.durexvietnam.vn/cdn/shop/products/RB_Durex_ThinFeel_Fetherlite_12pk_new_a6c373bc-5c8a-4782-9fc9-128f109b5a8e_540x.png?v=1592438125",
      "name": "Bao Cao Su Durex Fetherlite Hộp 12 Cái",
      "price": 6000
  },{
      "id":"007",
      "quantity":15,
      "image": "https://www.durexvietnam.vn/cdn/shop/products/RB_Durex_ThinFeel_Fetherlite_3pk_8850163000100_Front_Vietnam_1280x.jpg?v=1592438116",
      "name": "Bao Cao Su Durex Fetherlite Hộp 3 Cái",
      "price": 4500
  },{
      "id":"008",
      "quantity":15,
      "image": "https://www.durexvietnam.vn/cdn/shop/products/RB_Durex_Performance_Performa_12pk_new_1049x.png?v=1592438107",
      "name": "Bao Cao Su Durex Performa Hộp 12 Cái",
      "price": 4500
  },{
      "id":"09",
      "quantity":15,
      "image": "https://www.durexvietnam.vn/cdn/shop/products/RB_Durex_Performance_Performa_3pk_RBL1913553_Front_VIETNAM_1280x.jpg?v=1592438107",
      "name": "Bao Cao Su Durex Performa Hộp 3 Cái",
      "price": 4500
  },{
      "id":"010",
      "quantity":15,
      "image": "https://www.durexvietnam.vn/cdn/shop/products/RB_Durex_Pleasuremax_12pk_new1_ef4889c4-ffdd-485c-8d95-960bc4c40607_1049x.png?v=1592438108",
      "name": "Bao Cao Su Durex Pleasuremax Hộp 12 Cái",
      "price": 4500
  },{
      "id":"011",
      "quantity":15,
      "image": "https://www.durexvietnam.vn/cdn/shop/products/RB_Durex_Kingtex_12pk_new1_5f843d2c-d189-41e5-a816-51bd7a04529e_1049x.png?v=1592438154",
      "name": "Bao Cao Su Durex Kingtex Hộp 12 Cái",
      "price": 4500
  },{
      "id":"DRAAAAAVEN!",
      "quantity":2,
      "image": "url('src/assets/Spinning Axe.png')",
      "name": "Rìu Xoay Draven Hộp 2 Cái",
      "price": 4500
  }
  ]

  cart: item[] =[]
  constructor() {}
  
  ShowCart() {
    if (this.cart!=null){
      for(let i=0; i<this.cart.length; i++)
      {
        alert("Name: " + this.cart[i].name +"\nQuantity: "+ this.cart[i].quantity)
      }
    }
    else{alert("Cart Empty");
    }
  }

  CheckOut(){
    if(this.cart.length == 0){
        alert("Cart Empty");
    }
    let total = 0;
    
    this.cart.forEach((temp) => {
      this.cart.forEach((cart) => {
            if(cart.id == temp.id){
                total += cart.price * temp.quantity;
            }
        })
    })
    alert("Tổng tiền là: " + total);
    this.listItems = [];
  }
}
