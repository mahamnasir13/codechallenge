import React, { Component } from 'react';
import './App.css';
import { NavLink, Route, Switch } from 'react-router-dom'
import App from './App'


class Routing extends Component {

  render() {

  return (
      <div>
        <div>
    
            <Switch>
              <Route path='/' component={ App }></Route>
            </Switch>

        </div>
      </div>
    )
  }
}

export default Routing;
