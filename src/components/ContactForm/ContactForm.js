import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid/non-secure';
import { Form, Label, Input, Button } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  changeName = ({ currentTarget: { value, name } }) => {
    this.setState({ [name]: value });
  };

  verifyName = () => {
    const { contacts } = this.props;
    // const nameCondition = this.verifyName().length > 0;

    const theSame = contacts.filter(({ name }) => {
      return name === this.state.name;
    });

    return theSame.length > 0
      ? alert(`${this.state.name} is already in contacts.`)
      : true;
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { onSubmit } = this.props;
    const id = nanoid();

    this.verifyName() && onSubmit({ ...this.state, id });

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name:
          <Input
            onChange={this.changeName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
          />
        </Label>

        <Label>
          Phone:
          <Input
            onChange={this.changeName}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
          />
        </Label>

        <Button type="submit">Add to contact</Button>
      </Form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  contacts: PropTypes.arrayOf(Object),
};
