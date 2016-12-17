var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Navigation = require('../components/navigation/index');
var Home = require('../containers/Home/index');
var SarantisProperties = require('../containers/Articles/sarantis');
var Paramount = require('../containers/Articles/paramount');
var Leadership = require('../containers/Leadership/index');
var Contact = require('../containers/Contact/index');
var Explore = require('../containers/Explore/index');

var routes = (
  <Router history={hashHistory}>
    <Route path ='/' component = {Navigation}>
      <IndexRoute component={Home} />
      <Route path ='sarantis' component = {SarantisProperties} />
      <Route path ='paramount' component = {Paramount} />
      <Route path ='contact' component = {Contact} />
      <Route path ='explore(/:name)' component = {Explore} />
    </Route>
  </Router>
);


module.exports = routes;
