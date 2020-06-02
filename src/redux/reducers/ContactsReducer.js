import { createReducer } from '@reduxjs/toolkit';
import { ADD_CONTACT_ACTION, REMOVE_CONTACT_ACTION } from '../actions/ContactsActions';
import { SAVE_EDIT_CONTACT_ACTION } from '../actions/ContactEditActions';

const contactsReducer = createReducer([], {
  [ADD_CONTACT_ACTION]: (state, action) => {
    return [...state, action.payload];
  },
  [REMOVE_CONTACT_ACTION]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
  [SAVE_EDIT_CONTACT_ACTION]: (state, action) => {
    return state.map(contact => (contact.id !== action.payload.id ? contact : action.payload));
  },
});

export default contactsReducer;
