import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../interfaces';

const loadProfileList = createAction('[Profile] Load profiles');
const loadProfileListSuccess = createAction('[Profile] Load profiles - Success', props<{ users: UserProfile[] }>());
const loadProfileListError = createAction('[Profile] Load profiles - Error');
const getProfileById = createAction('[Profile] Get profile by id', props<{ id: number }>());

export const profileActions = {
    getProfileById,
    loadProfileList,
    loadProfileListError,
    loadProfileListSuccess
};
