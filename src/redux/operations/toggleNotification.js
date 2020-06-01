import { ADD_NOTIFICATION_ACTION, CLOSE_NONIFICATION_ACTION } from '../actions';

const toggleNotification = message => dispatch => {
  dispatch(ADD_NOTIFICATION_ACTION(message));

  setTimeout(() => {
    dispatch(CLOSE_NONIFICATION_ACTION());
  }, 3000);
};

export default toggleNotification;
