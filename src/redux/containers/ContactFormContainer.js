import { connect } from 'react-redux';
import { ADD_CONTACT_ACTION } from '../actions';
import ContactForm from '../../components/ContactForm/ContactForm';
import { GET_ALL_CONTACTS } from '../selectors/ContactsSelector';
import toggleNotification from '../operations/toggleNotification';

const mapStateToProps = state => ({
  contacts: GET_ALL_CONTACTS(state),
});

const mapDispatchToProps = dispatch => ({
  addContact: contact => {
    dispatch(ADD_CONTACT_ACTION(contact));
  },
  toggleNotification: message => dispatch(toggleNotification(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
