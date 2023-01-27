import styled from '@emotion/styled';

export const Label = styled.label`
  font-weight: 700;
  font-size: 16px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 200px;
  margin-top: 5px;
  outline: none;
  border: 2px solid black;
  border-radius: 10px;

  &:focus {
    border-color: rgb(0, 204, 255);
  }
`;
