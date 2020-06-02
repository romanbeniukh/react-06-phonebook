import { createReducer } from '@reduxjs/toolkit';
import {
  EDIT_CONTACT_ACTION,
  CLOSE_EDIT_CONTACT_ACTION,
  SAVE_EDIT_CONTACT_ACTION,
} from '../actions/ContactEditActions';

const initialState = {
  id: null,
  name: '',
  phone: '',
};

const editContact = createReducer(initialState, {
  [EDIT_CONTACT_ACTION]: (state, action) => {
    return action.payload;
  },
  [SAVE_EDIT_CONTACT_ACTION]: () => {
    return initialState;
  },
  [CLOSE_EDIT_CONTACT_ACTION]: () => {
    return initialState;
  },
});

export default editContact;
