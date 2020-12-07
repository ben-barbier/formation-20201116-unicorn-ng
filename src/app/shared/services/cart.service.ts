import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Unicorn } from '../models/unicorn.model';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    public cart = new BehaviorSubject<Unicorn[]>([]);

    public addToCart(unicorn: Unicorn): void {
        const currentCart = this.cart.getValue();
        const newCart = currentCart.concat(unicorn as Unicorn);
        this.cart.next(newCart);
    }

    public removeFromCart(unicornToRemove: Unicorn): void {
        const currentCart = this.cart.getValue();
        const newCart = currentCart.filter(unicorn => unicorn.id !== unicornToRemove.id);
        this.cart.next(newCart);
    }

    public isInCart(unicorn: Unicorn): boolean {
        const currentCart = this.cart.getValue();
        return currentCart.some(u => u.id === unicorn.id);
    }
}
