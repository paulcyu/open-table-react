import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from '../components/ListItem';

it('renders', () => {
  const container = document.createElement('div');
  ReactDOM.render(<ListItem />, container);
  ReactDOM.unmountComponentAtNode(container);
});
