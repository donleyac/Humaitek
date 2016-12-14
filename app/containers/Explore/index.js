var React = require('react');
require('./styles.scss');

var Explore = React.createClass({
  render(){
    return(
      <div className="explore">
        {this.props.children}
      </div>
    )
  }
});

module.exports = Explore;
