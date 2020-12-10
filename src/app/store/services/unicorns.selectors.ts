import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';
import { EntityState } from '../reducers';

// selectors
export const getEntityState = createFeatureSelector<EntityState>('entityCache');
export const getUnicorns = createSelector(getEntityState, (state: EntityState) => state.unicorns);
export const getUnicorn = createSelector(getUnicorns, (state: Unicorn[], prop: { id: number }) =>
    state.find(u => u.id === prop.id),
);

@Injectable()
export class UnicornsSelectors {
    constructor(private store: Store<EntityState>) {}

    public unicorns$ = this.store.select(getUnicorns);
    public unicorn$ = (id: number) => this.store.select(getUnicorn, { id });
}
