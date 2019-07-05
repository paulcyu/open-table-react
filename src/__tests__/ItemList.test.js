import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import ItemList from '../components/ItemList';

it('renders', () => {
  const testData = [
    {
      id: "foo",
      name: "bar"
    },
    {
      id: "baz",
      name: "foo"
    }
  ]

  ReactTestUtils.renderIntoDocument(<ItemList items={testData}/>);
  
});
