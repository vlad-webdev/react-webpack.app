import React from 'react';
import {render} from 'react-dom';
import App from './components/app/app.component';
import './jquery';
import 'bootstrap';

render(
  <App />,
  document.getElementById('app')
)
