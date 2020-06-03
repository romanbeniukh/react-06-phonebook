import React from 'react';
import T from 'prop-types';
import CSSTransition from 'react-transition-group/cjs/CSSTransition';
import ContactForm from '../redux/containers/ContactFormContainer';
import ContactList from '../redux/containers/ContactsListContainer';
import ContactFilter from '../redux/containers/ContactFilterContainer';
import Section from './Section/Section';
import CustomAlert from '../redux/containers/NotificationContainer';
import flip from '../transitions/flip.module.css';
import slideRight from '../transitions/slide-right.module.css';

const App = ({ contactsLength, notificationMessage }) => (
  <div className="page-container">
    <Section title="Форма контактов">
      <ContactForm />
    </Section>
    <CSSTransition in={contactsLength > 1} timeout={200} classNames={flip} unmountOnExit>
      <ContactFilter />
    </CSSTransition>
    <Section title="Контакты">
      {!contactsLength && <span>Нет контактов</span>}
      <CSSTransition in={contactsLength > 0} timeout={200} classNames={flip} unmountOnExit>
        <ContactList />
      </CSSTransition>
    </Section>
    <CSSTransition in={!!notificationMessage} timeout={500} classNames={slideRight} unmountOnExit>
      <CustomAlert />
    </CSSTransition>
  </div>
);

App.propTypes = {
  contactsLength: T.number,
  notificationMessage: T.string,
};

export default App;
