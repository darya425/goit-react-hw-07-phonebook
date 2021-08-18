import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as contactsActions from './contacts-actions';

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (_, { payload }) => payload,

  [contactsActions.addContact]: (state, { payload }) => [...state, payload],

  [contactsActions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const error = createReducer(null, {
  [contactsActions.fetchContactsError]: (_, { payload }) => payload,
  [contactsActions.fetchContactsRequest]: () => null,
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  error,
  filter,
});
