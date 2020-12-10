import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { filter, first } from 'rxjs/operators';
import { Unicorn } from '../../../shared/models/unicorn.model';
import { CartDispatchers } from '../../../store/services/cart.dispatchers';
import { CartSelectors } from '../../../store/services/cart.selectors';
import { EditUnicornDialogComponent } from './edit-unicorn-dialog/edit-unicorn-dialog.component';

@Component({
    selector: 'app-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss'],
})
export class UnicornCardComponent implements OnInit, OnChanges {
    @Input() public unicorn: Unicorn | undefined;
    @Output() private deleted = new EventEmitter<void>();
    @Output() private updated = new EventEmitter<Unicorn>();

    public age = 0;
    public isInCart$: Observable<boolean> | undefined;

    constructor(
        private dialog: MatDialog,
        private cartDispatchers: CartDispatchers,
        private cartSelectors: CartSelectors,
    ) {
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
        if (this.unicorn) {
            debugger;
            this.isInCart$ = this.cartSelectors.isInCart$(this.unicorn);
        }
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

    public toggleToCart(): void {
        debugger;
        this.isInCart$?.pipe(first()).subscribe(isInCart => {
            if (this.unicorn) {
                if (isInCart) {
                    this.cartDispatchers.removeUnicornFromCart(this.unicorn);
                } else {
                    this.cartDispatchers.addUnicornToCart(this.unicorn);
                }
            }
        });
    }

    // BAD !!!!
    public isPair(age: number): boolean {
        // console.count('isPair');
        return age % 2 === 0;
    }
}
