import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Home} from './screens/'
import './App.css';

class App extends Component {
    render() {
      return (
        <div className="main">
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </BrowserRouter>
        </div>
      );
    }
}

export default App;
