import { createAction } from '@reduxjs/toolkit';
import shortId from 'shortid';

export const addContact = createAction('contact/add', ({ name, number }) => {
  return {
    payload: {
      id: shortId.generate(),
      name,
      number,
    },
  };
});

export const deleteContact = createAction('contact/delete');
export const changeFilter = createAction('contact/changeFilter');

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
);
export const fetchContactsError = createAction('contacts/fetchContactsError');
