import { connect } from 'react-redux';
import { GET_ALL_CONTACTS, GET_EDIT, GET_FILTERED_CONTACTS } from '../selectors/ContactsSelector';
import ContactList from '../../components/ContactList/ContactList';
import {
  REMOVE_CONTACT_ACTION,
  SAVE_EDIT_CONTACT_ACTION,
  EDIT_CONTACT_ACTION,
  CLOSE_EDIT_CONTACT_ACTION,
  RESET_FILTER_ACTION,
} from '../actions';
import toggleNotification from '../operations/toggleNotification';

const mapStateToProps = state => ({
  contacts: GET_ALL_CONTACTS(state),
  filteredContacts: GET_FILTERED_CONTACTS(state),
  edit: GET_EDIT(state),
});

const mapDispatchToProps = dispatch => ({
  removeContact: id => {
    dispatch(REMOVE_CONTACT_ACTION(id));
  },
  editContact: contact => {
    dispatch(EDIT_CONTACT_ACTION(contact));
  },
  saveEdit: contact => {
    dispatch(SAVE_EDIT_CONTACT_ACTION(contact));
  },
  closeEdit: contact => {
    dispatch(CLOSE_EDIT_CONTACT_ACTION(contact));
  },
  resetFilter: name => {
    dispatch(RESET_FILTER_ACTION(name));
  },
  toggleNotification: message => dispatch(toggleNotification(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
