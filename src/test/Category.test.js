import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Category from './Category'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Category/>, div);
  ReactDOM.unmountComponentAtNode(div);
});