import { createAction } from '@reduxjs/toolkit';

export const ADD_CONTACT_ACTION = createAction('ADD_CONTACT', contact => ({
  payload: {
    id: Date.now(),
    ...contact,
  },
}));

export const REMOVE_CONTACT_ACTION = createAction('REMOVE_CONTACT');
