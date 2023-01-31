import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { List } from './ContactList.styled';

import ContactItem from './ContactItem';

class ContactList extends Component {
  render() {
    const { contacts, filter, onDelete } = this.props;
    console.log(contacts);
    return (
      <>
        <List>
          {contacts.map(({ number, name, id }, _, arr) => {
            console.log(arr);
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
      </>
    );
  }
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(Object),
  filter: PropTypes.string,
  onDelete: PropTypes.func,
};
