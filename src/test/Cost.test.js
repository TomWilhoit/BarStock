import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cost from './Cost'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cost/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
