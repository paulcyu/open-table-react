import React from 'react';
import ReactDOM from 'react-dom';
import TextInput from '../components/TextInput';

it('renders', () => {
  const container = document.createElement('div');
  ReactDOM.render(<TextInput />, container);
  ReactDOM.unmountComponentAtNode(container);
});


it('renders', () => {
  const testData = {
    name: 'foo',
    value: 'bar',
    label: 'baz'
  }
  const container = document.createElement('div');
  ReactDOM.render(
    <TextInput 
      name={testData.name}
      value={testData.value}
      label={testData.label}
      onChangeHandler={function(){}}
    />, container);
  const label = container.querySelectorAll('label');
  const input = container.querySelectorAll('input');
  expect(label).toHaveLength(1);
  expect(label[0].getAttribute('for')).toBe('foo');
  expect(label[0].textContent).toBe('baz');

  expect(input).toHaveLength(1);
  expect(input[0].id).toBe('foo');
  expect(input[0].name).toBe('foo');
  expect(input[0].value).toBe('bar')
  ReactDOM.unmountComponentAtNode(container);
});
