import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AddCapacityComponent } from '../../dialogs/add-capacity/add-capacity.component';
import { Unicorn } from '../../models/unicorn.model';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
    public cart: Unicorn[] = [];

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(result => result.matches),
        shareReplay(),
    );

    constructor(private breakpointObserver: BreakpointObserver, cartService: CartService, private dialog: MatDialog) {
        cartService.cart.subscribe(newCart => (this.cart = newCart));
    }

    public addCapacity(): void {
        this.dialog.open(AddCapacityComponent);
    }
}
