import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Application from './Application';
import Search from './../Search';
import Artist from './../Artist';

export class ApplicationContainer extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Application}>
          <IndexRoute component={Search} />
          <Route path="/artist/:mbid" component={Artist} />
          <Route path="*" component={Application}/>
        </Route>
      </Router>
    )
  }
}