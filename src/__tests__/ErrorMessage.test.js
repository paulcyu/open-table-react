import React from 'react';
import ReactDOM from 'react-dom';
import ErrorMessage from '../components/ErrorMessage';



it('compiles, but does not render', () => {
  const testData = {
    message: ""
  }
  const container = document.createElement('div');
  ReactDOM.render(<ErrorMessage error={testData}/>, container);
  const error = container.querySelector('div.error');
  expect(error).toBeNull();
  ReactDOM.unmountComponentAtNode(container);
});

it('renders with message and status', () => {
  const testData = {
    message: "foo",
    status: "bar"
  }
  const container = document.createElement('div');
  ReactDOM.render(<ErrorMessage error={testData} />, container);
  const error = container.querySelector('div.error');
  expect(error.textContent).toBe('foo [bar]');
  ReactDOM.unmountComponentAtNode(container);
});


it('renders with message only', () => {
  const testData = {
    message: "foo",
    status: ""
  }
  const container = document.createElement('div');
  ReactDOM.render(<ErrorMessage error={testData} />, container);
  const error = container.querySelector('div.error');
  expect(error.textContent).toBe('foo');
  ReactDOM.unmountComponentAtNode(container);
});


