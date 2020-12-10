import { createReducer, on } from '@ngrx/store';
import { addUnicornToCart, clearCart, removeUnicornFromCart } from '../actions/cart.actions';
import { deleteUnicornSuccess } from '../actions/unicorns.actions';

const initialState: number[] = [];

export const cartReducer = createReducer(
    initialState,
    on(addUnicornToCart, (state, { unicorn }) => [...state, unicorn.id]),
    on(removeUnicornFromCart, (state, { unicorn }) => state.filter(id => id !== unicorn.id)),
    on(clearCart, () => [] as number[]),

    // 💡💪 : Supprime une licorne du panier si elle supprimée de la liste de licornes
    on(deleteUnicornSuccess, (state, { unicorn }) => state.filter(u => u !== unicorn.id)),
);
