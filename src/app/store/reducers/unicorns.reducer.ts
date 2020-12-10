import { createReducer, on } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';
import { addUnicorn, deleteUnicorn, updateUnicorn } from '../actions/unicorns.actions';

const initialState: Unicorn[] = [];

export const unicornsReducer = createReducer(
    initialState,
    //     getUnicorns
    on(deleteUnicorn, (state, { unicorn }) => state.filter(u => u.id !== unicorn.id)),
    on(addUnicorn, (state, { unicorn }) => [...state, unicorn]),
    on(updateUnicorn, (state, { unicorn }) => state.map(u => (u.id === unicorn.id ? unicorn : u))),
);
