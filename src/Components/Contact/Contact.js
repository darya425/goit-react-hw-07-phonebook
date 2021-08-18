import React from 'react';
import PropTypes from 'prop-types';

import './Contact.scss';

const Contact = ({ name, number }) => (
  <>
    <span className="name-item">{name}</span>
    <span className="name-item">{number}</span>
  </>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
