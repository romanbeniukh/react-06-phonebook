import { combineReducers } from 'redux';
import contactsReducer from './ContactsReducer';
import filterReducer from './ContactFilterReducer';
import editContact from './ContactEditReducer';
import notificationReducer from './NotificationReducer';

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  edit: editContact,
  notification: notificationReducer,
});
