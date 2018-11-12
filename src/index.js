import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, HashRouter, BrowserRouter, NavLink } from 'react-router-dom';
import Home from './views/Home';
import 'babel-polyfill';
import "isomorphic-fetch"
import 'url-search-params-polyfill';

import './scss/main.scss';

/*
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/index" component={Home} />
    </div>
  </BrowserRouter>,
  document.getElementById('app'));
*/

ReactDOM.render(
  <Home />,
  document.getElementById('app'));
