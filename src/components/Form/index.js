import React from 'react';

const Form = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <input name="todo" type="text" />
    <button type="Submit">Adicionar</button>
  </form>
);

export default Form;
