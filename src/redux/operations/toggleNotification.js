import { ADD_NOTIFICATION_ACTION, CLOSE_NOTIFICATION_ACTION } from '../actions/NotificationActions';

const toggleNotification = message => dispatch => {
  dispatch(ADD_NOTIFICATION_ACTION(message));

  setTimeout(() => {
    dispatch(CLOSE_NOTIFICATION_ACTION());
  }, 3000);
};

export default toggleNotification;
