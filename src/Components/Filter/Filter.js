import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsActions from '../../Redux/contacts-actions';
import { getFilter } from '../../Redux/contacts-selectors';

import './Filter.scss';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <div className="filter-form">
      <label className="filter-title">Find contact by name :</label>
      <input
        className="filter-input"
        type="text"
        value={value}
        placeholder="Find a lost soul..."
        onChange={e =>
          dispatch(contactsActions.changeFilter(e.currentTarget.value))
        }
      />
    </div>
  );
};

export default Filter;
