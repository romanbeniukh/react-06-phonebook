import { createReducer } from '@reduxjs/toolkit';
import { ADD_NOTIFICATION_ACTION, CLOSE_NOTIFICATION_ACTION } from '../actions/NotificationActions';

const notificationReducer = createReducer(
  {},
  {
    [ADD_NOTIFICATION_ACTION]: (state, action) => {
      return action.payload;
    },
    [CLOSE_NOTIFICATION_ACTION]: () => {
      return {};
    },
  },
);

export default notificationReducer;
