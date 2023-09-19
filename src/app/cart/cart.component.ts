import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cartService.getItems();

  checkoutForm = this.FormBuilder.group({
    name: '',
    address: '',
  })

  constructor(
    private cartService: CartService,
    private FormBuilder: FormBuilder,
  ) { }

  OnSubmit(): void{
    //Process checkout data.
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
