import React from 'react';
import T from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ContactItem from './ContactItem';
import flip from '../../transitions/flip.module.css';

const ContactList = ({
  filteredContacts,
  contacts,
  removeContact,
  editContact,
  edit,
  saveEdit,
  closeEdit,
  resetFilter,
  toggleNotification,
}) => (
  <>
    <TransitionGroup component="ul" className="contact-list">
      {filteredContacts.map(contact => (
        <CSSTransition key={contact.id} timeout={200} classNames={flip} unmountOnExit>
          <li className="contact-item" key={contact.id}>
            <ContactItem
              contacts={contacts}
              removeContact={() => {
                removeContact(contact.id);

                filteredContacts.length <= 1 && resetFilter();
              }}
              editContact={() => editContact(contact)}
              saveEdit={saveEdit}
              closeEdit={() => closeEdit(contact)}
              contact={contact}
              edit={edit}
              toggleNotification={toggleNotification}
            />
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  </>
);

ContactList.propTypes = {
  filteredContacts: T.arrayOf(
    T.shape({
      name: T.string,
      phone: T.string,
      id: T.number,
    }),
  ),
  contacts: T.arrayOf(
    T.shape({
      name: T.string,
      phone: T.string,
      id: T.number,
    }),
  ),
  removeContact: T.func.isRequired,
  edit: T.shape({
    name: T.string,
    phone: T.string,
    id: T.number,
  }),
  editContact: T.func.isRequired,
  saveEdit: T.func.isRequired,
  toggleNotification: T.func.isRequired,
  resetFilter: T.func.isRequired,
  closeEdit: T.func.isRequired,
};

export default ContactList;
