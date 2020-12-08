import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { Unicorn } from '../../shared/models/unicorn.model';
import { CartService } from '../../shared/services/cart.service';
import { EditUnicornDialogComponent } from './edit-unicorn-dialog/edit-unicorn-dialog.component';

@Component({
    selector: 'app-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss', '../../shared/styles/unicorns-and-poneys.scss'],
})
export class UnicornCardComponent implements OnInit, OnChanges {
    @Input() public unicorn: Unicorn | undefined;
    @Output() private deleted = new EventEmitter<void>();
    @Output() private updated = new EventEmitter<Unicorn>();

    public age = 0;
    public isInCart = false;

    constructor(private dialog: MatDialog, private cartService: CartService) {
        // Step 1 les Inputs ne sont pas renseignés ici
        console.log(this.unicorn);
    }

    ngOnChanges(changes: SimpleChanges): void {
        // Step 2 avec mes Inputs de renseignés
        const currentYear = new Date().getFullYear();
        this.age = currentYear - changes.unicorn?.currentValue?.birthyear;
    }

    ngOnInit(): void {
        // Step 3 avec mes Inputs de renseignés aussi
        console.log(this.unicorn);
    }

    public deleteUnicorn(): void {
        this.deleted.emit();
    }

    public openEditDialog(): void {
        this.dialog
            .open(EditUnicornDialogComponent, {
                data: {
                    unicorn: this.unicorn,
                },
            })
            .afterClosed()
            .pipe(filter(e => !!e))
            .subscribe((formFields: { name: string; birthYear: number }) => {
                if (this.unicorn) {
                    this.updated.emit({
                        ...this.unicorn,
                        name: formFields.name,
                        birthyear: formFields.birthYear,
                    });
                }
            });
    }

    public addToCart(): void {
        if (this.unicorn) {
            if (this.cartService.isInCart(this.unicorn)) {
                this.cartService.removeFromCart(this.unicorn);
            } else {
                this.cartService.addToCart(this.unicorn);
            }
            this.isInCart = !this.isInCart;
        }
    }

    public isPair(age: number): boolean {
        console.count('isPair');
        return age % 2 === 0;
    }
}
