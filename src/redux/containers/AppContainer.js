import { connect } from 'react-redux';
import { GET_ALL_NOTIFICATION } from '../selectors/NotificationSelector';
import App from '../../components/App';
import { GET_ALL_CONTACTS } from '../selectors/ContactsSelector';

const mapStateToProps = state => ({
  notification: GET_ALL_NOTIFICATION(state),
  contacts: GET_ALL_CONTACTS(state),
});

export default connect(mapStateToProps, null)(App);
