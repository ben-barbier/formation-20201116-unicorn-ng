import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Unicorn } from '../../shared/models/unicorn.model';
import { EntityState } from '../reducers';
import { getUnicorns } from './unicorns.selectors';

// selectors
const getEntityState = createFeatureSelector<EntityState>('entityCache');
const getCartUnicornsIds = createSelector(getEntityState, (state: EntityState) => state.cart);
const cartIsEmpty = createSelector(getCartUnicornsIds, (cart: number[]) => cart.length === 0);
const isInCart = createSelector(getCartUnicornsIds, (cart: number[], prop: { unicorn: Unicorn }) =>
    cart.some(id => id === prop.unicorn.id),
);
const getCartUnicorns = createSelector(getCartUnicornsIds, getUnicorns, (cart, unicorns) =>
    cart.map(unicornId => unicorns.find(u => u.id === unicornId) as Unicorn),
);

@Injectable()
export class CartSelectors {
    constructor(private store: Store<EntityState>) {}

    public cart$: Observable<Unicorn[]> = this.store.select(getCartUnicorns);
    public isEmpty$ = this.store.select(cartIsEmpty);
    public isInCart$ = (unicorn: Unicorn) => this.store.select(isInCart, { unicorn });
}
