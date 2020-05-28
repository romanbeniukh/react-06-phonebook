import React from 'react';
import T from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ContactItem from './ContactItem';
import flip from '../../transitions/flip.module.css';

const ContactList = ({ contacts, removeContact, selectForEdit, selectedForEdit, editContact, closeEditContact }) => {
  return (
    <TransitionGroup component="ul" className="contact-list">
      {contacts.map(contact => (
        <CSSTransition key={contact.id} timeout={200} classNames={flip} unmountOnExit>
          <li className="contact-item" key={contact.id}>
            <ContactItem
              removeContact={() => removeContact(contact.id)}
              selectForEdit={() => selectForEdit(contact.id)}
              contact={contact}
              selectedForEdit={selectedForEdit}
              closeEditContact={closeEditContact}
              editContact={editContact}
            />
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  contacts: T.arrayOf(T.shape({ id: T.string.isRequired })).isRequired,
  removeContact: T.func.isRequired,
  selectForEdit: T.func.isRequired,
  selectedForEdit: T.objectOf(T.string),
  editContact: T.func.isRequired,
  closeEditContact: T.func.isRequired,
};

export default ContactList;
