import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { List } from './ContactList.styled';

import ContactItem from './ContactItem';

class ContactList extends Component {
  render() {
    const { contacts, filter, onDelete } = this.props;
    const condition = contacts.length > 0;
    console.log(condition);
    return (
      <List>
        {condition &&
          contacts.map(({ number, name, id }) => {
            const filterCondition = name
              .toUpperCase()
              .includes(filter.toUpperCase());

            return (
              filterCondition && (
                <ContactItem
                  key={id}
                  name={name}
                  number={number}
                  handleDelete={() => onDelete(id)}
                ></ContactItem>
              )
            );
          })}
      </List>
    );
  }
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(Object),
  filter: PropTypes.string,
  onDelete: PropTypes.func,
};
