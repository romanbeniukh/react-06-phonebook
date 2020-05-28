import React, { Component } from 'react';
import CSSTransition from 'react-transition-group/cjs/CSSTransition';
import shortId from 'shortid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import Section from './Section/Section';
import CustomAlert from './Alert/CustomAlert';
import slideRight from '../transitions/slide-right.module.css';
import fromZoom from '../transitions/from-zoom.module.css';
import flip from '../transitions/flip.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Артур Пирожков', phone: '093-117-78-99' },
      { id: 'id-2', name: 'Артемий Лебедев', phone: '096-547-32-65' },
      { id: 'id-3', name: 'Вадим Макеев', phone: '050-453-54-65' },
    ],
    filter: '',
    isAlert: false,
    isMounted: false,
    alertMessage: '',
    selectedForEdit: null,
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }

    this.setState({
      isMounted: true,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addContact = ({ name, phone }) => {
    const contact = {
      id: shortId.generate(),
      name,
      phone,
    };

    const uniqueName = this.state.contacts.some(
      contactName => contactName.name.toLowerCase() === contact.name.toLowerCase(),
    );

    if (uniqueName) {
      this.setState({
        isAlert: true,
        alertMessage: `${name} уже есть в списке контактов!`,
      });

      setTimeout(() => this.closeAlert(), 3000);
    } else {
      this.setState(state => ({
        contacts: state.contacts.concat(contact),
      }));
    }
  };

  removeContact = id => {
    const filteredContacts = this.filterContact();

    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));

    if (filteredContacts.length === 1) {
      this.resetFilter();
    }
  };

  selectForEdit = id => {
    const { contacts } = this.state;
    const contact = contacts.find(cont => cont.id === id);

    this.setState({
      selectedForEdit: contact,
    });
  };

  editContact = ({ name, phone }) => {
    const filteredContacts = this.filterContact();
    const { contacts, selectedForEdit } = this.state;
    const currentIndex = contacts.indexOf(selectedForEdit);
    const clonedContacts = [...contacts];
    const changedItem = {
      id: selectedForEdit.id,
      name,
      phone,
    };

    clonedContacts.splice(currentIndex, 1, changedItem);

    this.setState({
      contacts: clonedContacts,
    });

    if (filteredContacts.length === 1) {
      this.resetFilter();
    }
  };

  closeEditContact = () => {
    this.setState({
      selectedForEdit: null,
    });
  };

  closeAlert = () => {
    this.setState({
      isAlert: false,
      alertMessage: '',
    });
  };

  changeFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  resetFilter = () => {
    this.setState({
      filter: '',
    });
  };

  filterContact = () => {
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));
  };

  render() {
    const { contacts, selectedForEdit, filter, isAlert, isMounted, alertMessage } = this.state;
    const visibleContacts = this.filterContact();

    return (
      <CSSTransition in={isMounted} timeout={500} classNames={fromZoom} unmountOnExit>
        <div className="page-container">
          <Section title="Форма контактов">
            <ContactForm addContact={this.addContact} />
          </Section>
          <Section title="Контакты">
            {contacts.length > 2 && <ContactFilter changeFilter={this.changeFilter} value={filter} />}
            {!contacts.length && <span>Нет контактов</span>}
            <CSSTransition in={contacts.length > 0} timeout={200} classNames={flip} unmountOnExit>
              <ContactList
                contacts={visibleContacts}
                removeContact={this.removeContact}
                selectForEdit={this.selectForEdit}
                editContact={this.editContact}
                closeEditContact={this.closeEditContact}
                selectedForEdit={selectedForEdit}
              />
            </CSSTransition>
          </Section>
          <CSSTransition in={isAlert} timeout={500} classNames={slideRight} unmountOnExit>
            <CustomAlert closeAlert={this.closeAlert} isAlert={isAlert} message={alertMessage} />
          </CSSTransition>
        </div>
      </CSSTransition>
    );
  }
}

export default App;
