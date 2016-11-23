var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Navigation = require('../components/navigation/index');
var Home = require('../containers/Home/index');

var routes = (
  <Router history={hashHistory}>
    <Route path ='/' component = {Navigation}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);


module.exports = routes;
