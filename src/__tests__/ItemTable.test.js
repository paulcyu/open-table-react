import React from 'react';
import ReactDOM from 'react-dom';
import ItemTable from '../components/ItemTable';

it('compiles but does not render anything', () => {
  const container = document.createElement('div');
  ReactDOM.render(<ItemTable />, container);
  expect(container.querySelectorAll('table')).toHaveLength(0);
  ReactDOM.unmountComponentAtNode(container);
});

it('renders ', () => {
  const testData = {
    filter: ['foo', 'baz'],
    headers: {
      'foo':'Foo',
      'baz':'Baz'
    },
    items: [
      {
        'id': '1',
        'foo': 'bar1',
        'baz': 'foo1'
      },      
      {
        'id': '2',
        'foo': 'bar2',
        'baz': 'foo2'
      },      
      {
        'id': '3',
        'foo': 'bar3',
        'baz': 'foo3'
      },
    ]
  };
  const container = document.createElement('div');
  ReactDOM.render(
    <ItemTable 
      headers={testData.headers}
      items={testData.items}
      filter={testData.filter}
    />, container);
  expect(container.querySelectorAll('table')).toHaveLength(1);
  expect(container.querySelectorAll('table thead tr')).toHaveLength(1);
  expect(container.querySelectorAll('table tbody tr')).toHaveLength(3);
  ReactDOM.unmountComponentAtNode(container);
});


