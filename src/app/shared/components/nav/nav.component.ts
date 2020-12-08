import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Unicorn } from '../../models/unicorn.model';
import { CartService } from '../../services/cart.service';
import { AddCapacityDialogComponent } from './add-capacity-dialog/add-capacity-dialog.component';

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

    constructor(
        private breakpointObserver: BreakpointObserver,
        cartService: CartService,
        private dialog: MatDialog,
        private translateService: TranslateService,
    ) {
        cartService.cart.subscribe(newCart => (this.cart = newCart));
    }

    public addCapacity(): void {
        this.dialog.open(AddCapacityDialogComponent);
    }

    public useLanguage(lang: string): void {
        this.translateService.use(lang);
    }
}
