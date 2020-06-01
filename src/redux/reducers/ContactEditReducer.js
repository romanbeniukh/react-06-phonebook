import { CLOSE_EDIT_CONTACT, EDIT_CONTACT, SAVE_EDIT_CONTACT } from '../constants/ActionTypes';

const editContact = (state = { id: null, name: '', phone: '' }, action) => {
  switch (action.type) {
    case EDIT_CONTACT:
      state = action.payload;
      return state;
    case SAVE_EDIT_CONTACT:
      state = { id: null, name: '', phone: '' };
      return state;
    case CLOSE_EDIT_CONTACT:
      state = { id: null, name: '', phone: '' };
      return state;
    default:
      return state;
  }
};

export default editContact;
