import { createAction, props } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';

export const getUnicorns = createAction('[Unicorns] GET_UNICORNS');
export const deleteUnicorn = createAction('[Unicorns] DELETE_UNICORN', props<{ unicorn: Unicorn }>());
export const updateUnicorn = createAction('[Unicorns] UPDATE_UNICORN', props<{ unicorn: Unicorn }>());
export const addUnicorn = createAction('[Unicorns] ADD_UNICORN', props<{ unicorn: Unicorn }>());
