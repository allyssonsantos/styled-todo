import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  box-sizing: border-box;
  font-size: 14px;
  padding: 10px;

  width: 90%;
`;

const Button = styled.button`
  border: 1px solid #abb7b7;
  border-radius: 3px;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  color: #fff;
  cursor: pointer;
  background-color: #abb7b7;
  font-size: 14px;
  padding: 10px;

  width: 10%;
`;

const Form = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Input name="todo" type="text" autoComplete="off" />
    <Button type="Submit">+</Button>
  </form>
);

export default Form;
