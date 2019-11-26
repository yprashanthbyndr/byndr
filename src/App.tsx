import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Home} from './screens/'
import './App.css';
import { ByndrRoutes } from './routes/routers';
interface props {
    
}
class App extends Component <props, any>{
  
    render() {
      console.log('ByndrRoutes', ByndrRoutes)
      return (
        <div className="main">
          <BrowserRouter>
            <Switch>
              {ByndrRoutes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
            </Switch>
          </BrowserRouter>
        </div>
      );
    }
}

export default App;

 const RouteWithSubRoutes =(route)=> {
  console.log('route', route)
  return (
    <Route
      exact
      path={route.path}
      component={route.component}
      // render={props => (
      //   // pass the sub-routes down to keep nesting
      //   <route  {...props} routes={route.routes} />
      // )}
    />
  );
}
