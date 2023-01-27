import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

const Filter = ({ onChange }) => {
  return (
    <Label>
      Search
      <Input
        onChange={({ currentTarget: { value } }) => onChange(value)}
        type="search"
        name="filter"
      ></Input>
    </Label>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func,
};
