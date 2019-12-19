import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { ByndrRoutes } from './routes/routers';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import Notfound from './screens/Notfound';


import { createBrowserHistory } from 'history';

const history = createBrowserHistory();


let location=  history.location
const path = (/#!(\/.*)$/.exec(location.hash) || [])[1];

if (path) {
  history.replace(path);
}

console.log(" out side is " ,history)

interface props {

}
class App extends Component<props, any>{


  render() {
    return (
      <Provider store={store}>
        <div className="main">
          <BrowserRouter>
            {/* <Header /> */}
            <Switch>
              {ByndrRoutes.map((route) => {
                return RouteWithSubRoutes({ ...route })
              })}
              {/* 301&302 redirects start */}
              <Redirect from='/old-path' to='/blog' />
              {/* 301&302 redirects end */}
              <Route component={Notfound} />
            </Switch>
          </BrowserRouter>
          {/* <Footer /> */}
        </div>
      </Provider>
    );
  }
}

export default App;

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      exact
      path={route.path}
      component={(props) => <route.component {...props} routeProps={route} />}
      key={route.path}

    // render={props => (
    //   // pass the sub-routes down to keep nesting
    //   <route  {...props} routes={route.routes} />
    // )}
    />
  );
}
