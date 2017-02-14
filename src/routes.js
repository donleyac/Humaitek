import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Navigation from './components/navigation/index';
import Home from './containers/Home/index';
import SarantisProperties from './containers/Articles/sarantis';
import Paramount from './containers/Articles/paramount';
import Zuzu from './containers/Articles/zuzu';
import Leadership from './containers/Leadership/index';
import Contact from './containers/Contact/index';
import Explore from './containers/Explore/index';

var routes = (
  <Router history={hashHistory}>
    <Route path ='/' component = {Navigation}>
      <IndexRoute component={Home} />
      <Route path ='sarantis' component = {SarantisProperties} />
      <Route path ='paramount' component = {Paramount} />
      <Route path ='zuzu' component={Zuzu} />
      <Route path ='contact' component = {Contact} />
      <Route path ='explore(/:name)' component = {Explore} />
    </Route>
  </Router>
);



module.exports = routes;
