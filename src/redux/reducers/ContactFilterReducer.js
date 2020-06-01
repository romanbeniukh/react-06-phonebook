import { FILTER_CONTACT, RESET_FILTER } from '../constants/ActionTypes';

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case FILTER_CONTACT:
      state = action.payload;
      return state;
    case RESET_FILTER:
      state = '';
      return state;
    default:
      return state;
  }
};

export default filterReducer;
