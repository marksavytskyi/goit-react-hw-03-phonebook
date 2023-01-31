import React, { Component } from 'react';

import Filter from './Filter';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  // componentDidMount() {
  //   if (localStorage.contacts) {
  //     this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
  //   }
  // }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
    console.log(localStorage);
  }

  onSubmit = contact => {
    this.setState({
      contacts: [...this.state.contacts, contact],
    });
  };

  onChange = value => {
    this.setState({ filter: value });
  };

  onDelete = id => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter(el => el.id !== id),
    });
  };

  render() {
    const { contacts, filter } = this.state;
    console.log(contacts);
    return (
      <div
        style={{
          width: '600px',
          borderRadius: '5px',
          margin: '0 auto 0 auto',
          color: '#010101',
          padding: '40px',
          backgroundColor: 'white',
        }}
      >
        <h2 style={{ textAlign: 'center' }}>Phonebook</h2>

        <ContactForm onSubmit={this.onSubmit} contacts={contacts}></ContactForm>

        <h2 style={{ textAlign: 'center' }}>Contacts:</h2>

        <Filter onChange={this.onChange}></Filter>

        <ContactList
          contacts={contacts}
          filter={filter}
          onDelete={this.onDelete}
        ></ContactList>
      </div>
    );
  }
}

export default App;
