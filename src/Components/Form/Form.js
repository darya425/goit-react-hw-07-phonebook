import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import shortId from 'shortid';
import * as contactsActions from '../../Redux/contacts-actions';
import { getItems } from '../../Redux/contacts-selectors';

import './Form.scss';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contactData = useSelector(getItems);

  const nameImputId = shortId.generate();
  const numberImputId = shortId.generate();

  const handleInputName = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = name.toLowerCase();
    const savedContacts = contactData.find(
      contact => contact.name.toLowerCase() === newContact,
    );

    if (savedContacts) {
      alert(name + ' is already in contacts.');
      reset();
      return;
    }

    dispatch(contactsActions.addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor={nameImputId} className="name">
        Name :
      </label>
      <input
        id={nameImputId}
        className="name_input"
        type="text"
        autoComplete="off"
        name="name"
        value={name}
        placeholder="Enter a made up name..."
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="You need to click on the letters"
        onChange={handleInputName}
        required
      />
      <label htmlFor={numberImputId} className="name">
        Phone number :
      </label>
      <input
        id={numberImputId}
        className="name_input"
        type="tel"
        autoComplete="off"
        name="number"
        value={number}
        placeholder="Enter number 666-66-66..."
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
        title="Do you know what a dash is?"
        onChange={handleInputName}
        required
      />

      <button className="btn-form" type="submit">
        Add contact
      </button>
    </form>
  );
};

export default Form;
