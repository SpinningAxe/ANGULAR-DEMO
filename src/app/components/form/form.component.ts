import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { item } from 'src/app/models/item.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FORMComponent {
  @Input()
  listItems: item[] = [];

  myForm: FormGroup = new FormGroup({});
  name: FormControl<string|null> = new FormControl('');
  price: FormControl<number|null> = new FormControl(0);
  quantity: FormControl<number|null> = new FormControl(0);
  id: FormControl<string|null> = new FormControl('');
  image: FormControl<string|null> = new FormControl('');

  constructor() {
    this.myForm.addControl('name', this.name)
    this.myForm.addControl('price', this.price)
    this.myForm.addControl('quantity', this.quantity)
    this.myForm.addControl('id', this.id)
    this.myForm.addControl('image', this.image)
  }
  // ngOnInit(): void {
  //   console.log(this.listItems.length!=0?this.listItems:'No items in list')
  // }

  submit() {
    let newItem: item = {
      id: this.id.value ?? '',
      name: this.name.value ?? 'default',
      price: this.price.value ?? 0,
      image: this.image.value ?? 'default',
      quantity: this.quantity.value ?? 0,
    };
    this.listItems.push(newItem);
  }
}
