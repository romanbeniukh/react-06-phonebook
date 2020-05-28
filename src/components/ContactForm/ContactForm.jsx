import React, { Component } from 'react';
import T from 'prop-types';
import { validateAll } from 'indicative/validator';
import Input from '../Input/Input';

const rules = {
  name: 'required|string|min:2',
  phone: 'required|string|min:13',
};

const errorMessages = {
  'name.required': 'Поле "Имя" обязательно для заполнения',
  'name.min': 'Введите минимум 2 буквы',
  'phone.required': 'Поле "Телефон" обязательно для заполнения',
  'phone.min': 'Введите телефон в формате "0999999999"',
};

class ContactForm extends Component {
  static propTypes = {
    addContact: T.func.isRequired,
    selectedForEdit: T.objectOf(T.string),
    closeEditContact: T.func,
  };

  state = {
    name: this.props.selectedForEdit ? this.props.selectedForEdit.name : '',
    phone: this.props.selectedForEdit ? this.props.selectedForEdit.phone : '',
    errors: {},
  };

  handleChange = e => {
    e.preventDefault();
    const { value, name } = e.target;
    let replaceValue = value;

    if (name === 'phone') {
      replaceValue = value.replace(/[^\d]/g, '');
      const regex = /^([^\s]{3})([^\s]{3})([^\s]{2})([^\s]{2})$/g;
      const match = regex.exec(replaceValue);

      if (match) {
        match.shift();
        replaceValue = match.join('-');
      }
    }

    this.setState({
      [name]: replaceValue,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, phone } = this.state;

    validateAll({ name, phone }, rules, errorMessages)
      .then(res => {
        this.props.addContact(res);
        this.resetForm();
      })
      .catch(err => {
        const formErrors = {};

        err.forEach(error => {
          formErrors[error.field] = error.message;
        });

        this.setState({
          errors: formErrors,
        });
      });
  };

  resetForm = () => {
    this.setState({
      name: '',
      phone: '',
      errors: {},
    });
  };

  render() {
    const { name, phone, errors } = this.state;
    const { selectedForEdit, closeEditContact } = this.props;
    return (
      <form
        className={selectedForEdit ? 'contact-form contact-form--edit' : 'contact-form'}
        onSubmit={this.handleSubmit}
      >
        <div className="contact-form__input-wrap">
          <Input
            name="name"
            value={name}
            handleChange={this.handleChange}
            placeholder="Имя"
            maxLength={20}
            type="text"
            label="Имя"
            autocomplete="off"
            errorMessage={errors}
          />
          <Input
            name="phone"
            value={phone}
            handleChange={this.handleChange}
            placeholder="Телефон"
            maxLength={10}
            type="text"
            label="Телефон"
            autocomplete="off"
            errorMessage={errors}
          />
        </div>
        <div className="contact-form__btn-wrap">
          <button
            className={selectedForEdit ? 'contact-form__btn contact-form__btn--done' : 'contact-form__btn'}
            onSubmit={this.handleSubmit}
            type="submit"
          >
            {selectedForEdit ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
              </svg>
            ) : (
              'Добавить контакт'
            )}
          </button>
          {selectedForEdit && (
            <button className="contact-form__btn contact-form__btn--close" type="button" onClick={closeEditContact}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
              </svg>
            </button>
          )}
        </div>
      </form>
    );
  }
}

export default ContactForm;
