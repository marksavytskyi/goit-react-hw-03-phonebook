import styled from '@emotion/styled';

export const Item = styled.li`
  padding: 10px;
  font-weight: 500;
  font-size: 16px;
  &:not(:last-child) {
    border-bottom: 1px solid black;
  }
`;

export const Number = styled.span`
  display: inline-block;
  color: blue;
  width: 100px;
  margin-right: 50px;
`;

export const Button = styled.button`
  display: inline-block;

  width: 100px;
  padding: 5px;

  background-color: #fff;
  border: 2px solid rgb(0, 204, 255);
  border-radius: 10px;

  font-weight: 500;
  text-transform: uppercase;
  transition: font-weight 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    border-color: rgb(238, 255, 0);
    font-weight: 700;
  }
`;
