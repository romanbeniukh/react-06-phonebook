import { ADD_CONTACT, REMOVE_CONTACT, SAVE_EDIT_CONTACT } from '../constants/ActionTypes';

const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    case REMOVE_CONTACT:
      return state.filter(note => note.id !== action.payload.id);
    case SAVE_EDIT_CONTACT:
      return state.map(contact => (contact.id !== action.payload.id ? contact : action.payload));
    default:
      return state;
  }
};

export default contactsReducer;
