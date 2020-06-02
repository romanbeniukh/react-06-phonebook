import { createReducer } from '@reduxjs/toolkit';
import { FILTER_CONTACT_ACTION, RESET_FILTER_ACTION } from '../actions/ContactFilterActions';

const filterReducer = createReducer('', {
  [FILTER_CONTACT_ACTION]: (state, action) => {
    return action.payload;
  },
  [RESET_FILTER_ACTION]: () => {
    return '';
  },
});

export default filterReducer;
