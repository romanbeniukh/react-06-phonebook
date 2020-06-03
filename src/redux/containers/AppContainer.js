import { connect } from 'react-redux';
import { GET_NOTIFICATION_MESSAGE } from '../selectors/NotificationSelector';
import App from '../../components/App';
import { GET_CONTACTS_LENGTH } from '../selectors/ContactsSelector';

const mapStateToProps = state => ({
  notificationMessage: GET_NOTIFICATION_MESSAGE(state),
  contactsLength: GET_CONTACTS_LENGTH(state),
});

export default connect(mapStateToProps, null)(App);
