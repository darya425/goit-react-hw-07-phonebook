import { useEffect } from 'react';
import * as contactsOperations from '../../Redux/contacts-operations';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsActions from '../../Redux/contacts-actions';
import { getVisibleContacts } from '../../Redux/contacts-selectors';
import './ContactsList.scss';

import Contact from '../Contact';

const ContactsList = () => {
  const contactData = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => dispatch(contactsActions.deleteContact(id));

  return (
    <>
      {contactData.length > 0 && (
        <ul className="list">
          {contactData.map(({ id, name, number }) => (
            <li className="item" key={id}>
              <Contact name={name} number={number} />
              <button
                className="btn"
                type="button"
                onClick={() => onDeleteContact(id)}
              ></button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactsList;
