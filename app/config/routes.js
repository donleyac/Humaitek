var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Home = require('../containers/Home/index');
var Box = require('../containers/Box/index');

var routes = (
  <Router history={hashHistory}>
    <Route path ='/' component = {Box}></Route>
  </Router>
);


module.exports = routes;
