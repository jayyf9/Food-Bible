import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Browse from './pages/browse/browse';
import 'typeface-roboto'
import Recipie from './pages/recipie/recipie';

const root = document.getElementById('root')

  ReactDOM.render(
    <BrowserRouter>
      <div>
        <Route path='/' exact component={Browse} />
        <Route path='/recipie/1' component={Recipie} />
      </div>
    </BrowserRouter>,
    root
  );