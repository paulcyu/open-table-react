import React from 'react';
import ReactDOM from 'react-dom';
import Restaurants from '../components/Restaurants';

it('renders', () => {
  const container = document.createElement('div');
  ReactDOM.render(<Restaurants />, container);
  ReactDOM.unmountComponentAtNode(container);
});
