var React = require('react');
var Grid = require('../Grid/index')

var Home = React.createClass({
  render: function(){
    return(
      <div>
        <h1 className="title">Humaitek</h1>
        <Grid></Grid>
      </div>
      )
    }
});

module.exports = Home;
