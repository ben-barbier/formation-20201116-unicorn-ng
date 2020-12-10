import { createReducer, on } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';
import {
    addUnicornSuccess,
    deleteUnicornSuccess,
    getUnicornsSuccess,
    updateUnicornSuccess,
} from '../actions/unicorns.actions';

const initialState: Unicorn[] = [];

export const unicornsReducer = createReducer(
    initialState,
    on(getUnicornsSuccess, (state, { unicorns }) => unicorns),
    on(updateUnicornSuccess, (state, { unicorn }) => state.map(u => (u.id !== unicorn.id ? u : unicorn))),
    on(deleteUnicornSuccess, (state, { unicorn }) => state.filter(u => u.id !== unicorn.id)),
    on(addUnicornSuccess, (state, { unicorn }) => [...state, unicorn]),
);
