import React from 'react';
import T from 'prop-types';
import ContactForm from '../ContactForm/ContactForm';

const ContactItem = ({
  contacts,
  contact,
  removeContact,
  editContact,
  edit,
  saveEdit,
  closeEdit,
  toggleNotification,
}) => (
  <>
    <div className="contact-item__wrap">
      {edit.id === contact.id ? (
        <ContactForm
          contacts={contacts}
          addContact={saveEdit}
          edit={edit}
          closeEdit={closeEdit}
          toggleNotification={toggleNotification}
        />
      ) : (
        <>
          <span className="contact-item__name">{contact.name}</span>
          <span className="contact-item__phone">{contact.phone}</span>
        </>
      )}
    </div>
    <div className="contact-item__btns-wrap">
      <button className="contact-item__btn" onClick={removeContact} type="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
        </svg>
      </button>
      <button type="button" className="contact-item__btn" onClick={editContact}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z" />
        </svg>
      </button>
    </div>
  </>
);

ContactItem.propTypes = {
  contacts: T.arrayOf(
    T.shape({
      name: T.string,
      phone: T.string,
      id: T.number,
    }),
  ),
  contact: T.shape({
    name: T.string.isRequired,
    phone: T.string.isRequired,
    id: T.number,
  }).isRequired,
  removeContact: T.func.isRequired,
  edit: T.shape({
    name: T.string,
    phone: T.string,
    id: T.number,
  }),
  editContact: T.func.isRequired,
  saveEdit: T.func.isRequired,
  toggleNotification: T.func.isRequired,
  closeEdit: T.func.isRequired,
};

export default ContactItem;
