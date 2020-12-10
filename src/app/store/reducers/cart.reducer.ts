import { createReducer, on } from '@ngrx/store';
import { addUnicornToCart, removeUnicornFromCart } from '../actions/cart.actions';

const initialState: number[] = [];

export const cartReducer = createReducer(
    initialState,
    on(addUnicornToCart, (state, { unicorn }) => {
        debugger;
        return [...state, unicorn.id];
    }),
    on(removeUnicornFromCart, (state, { unicorn }) => {
        debugger;

        return state.filter(id => id !== unicorn.id);
    }),
);
