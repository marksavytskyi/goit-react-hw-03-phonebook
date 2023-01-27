import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  border: none;
  border-radius: 5px;
  outline: none;
  width: 200px;
  height: 25px;
  margin-left: 10px;
  background-color: rgb(0, 204, 255);

  &:focus {
    background-color: rgb(238, 255, 0);
  }
`;

export const Button = styled.button`
  display: flex;
  align-content: center;
  justify-content: center;

  width: 200px;
  padding: 10px;

  background-color: #fff;
  border: 2px solid rgb(0, 204, 255);
  border-radius: 10px;

  font-size: 15px;
  font-weight: 700;

  &:hover {
    border-color: rgb(238, 255, 0);
  }
`;
