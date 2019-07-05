import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import ItemRow from '../components/ItemRow';

const testData = {
  headings: ['foo', 'baz'],
  row: {
    'foo': 'bar',
    'baz': 'foo'
  }
};

it('renders a table row', () => {
  const container = document.createElement('tbody');
  ReactDOM.render(<ItemRow row={testData.row} filter={testData.headings} />, container);
  const headings = container.querySelectorAll('th');
  const columns = container.querySelectorAll('td');
  expect(headings).toHaveLength(0);
  expect(columns[0].textContent).toBe('bar');
  expect(columns[1].textContent).toBe('foo');
  ReactDOM.unmountComponentAtNode(container);
});

it('renders table headers', () => {
  const container = document.createElement('thead');
  ReactDOM.render(<ItemRow row={testData.row} filter={testData.headings} isHeader={true} />, container);
  const headings = container.querySelectorAll('th');
  const columns = container.querySelectorAll('td');
  expect(headings).toHaveLength(2);
  expect(columns).toHaveLength(0);  
  ReactDOM.unmountComponentAtNode(container);
});

it('only filtered columns are rendered', () => {
  const testHeadings = ['baz'];
  const container = document.createElement('tbody');
  ReactDOM.render(<ItemRow row={testData.row} filter={testHeadings} />, container);
  const columns = container.querySelectorAll('td');
  expect(columns).toHaveLength(1);
  expect(columns[0].textContent).toBe('foo');
  ReactDOM.unmountComponentAtNode(container);
});


