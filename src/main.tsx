import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { Router, Route } from './libs/fake-router-dom';
import { About, Root } from './Components';

const container = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <Router>
      <Route path='/' component={<Root />}></Route>
      <Route path='/about' component={<About />}></Route>
    </Router>
  </React.StrictMode>
);
