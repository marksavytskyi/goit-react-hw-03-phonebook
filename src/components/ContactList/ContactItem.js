import PropTypes from 'prop-types';

import { Item, Number, Button } from './ContactItem.styled';

const ContactItem = ({ name, number, handleDelete }) => (
  <Item>
    {name}: <Number>{number}</Number>
    <Button type="button" onClick={handleDelete} name="delete">
      delete
    </Button>
  </Item>
);

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  handleDelete: PropTypes.func,
};
