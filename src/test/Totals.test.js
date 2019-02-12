import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Totals from './Totals'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Totals/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
