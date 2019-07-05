import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../components/Form';

it('renders', () => {
  const container = document.createElement('div');
  ReactDOM.render(<Form />, container);
  const textInputs = container.querySelectorAll('input[type=text]');
  const submitBtn = container.querySelectorAll('input[type=submit]');
  expect(textInputs).toHaveLength(2);
  expect(submitBtn).toHaveLength(1);
  ReactDOM.unmountComponentAtNode(container);
});
