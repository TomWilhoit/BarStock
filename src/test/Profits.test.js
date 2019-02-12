import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Profits from './Profits'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Profits/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
