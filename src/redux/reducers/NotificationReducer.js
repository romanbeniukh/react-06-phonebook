import { ADD_NOTIFICATION, CLOSE_NOTIFICATION } from '../constants/ActionTypes';

const notificationReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return action.payload;
    case CLOSE_NOTIFICATION:
      return {};
    default:
      return state;
  }
};

export default notificationReducer;
