var React = require('react');

//Proptypes -> Width, Height, Date, Category
var Box = React.createClass({
  render(){
    return (
      <div className="box">
        {this.props.children}
      </div>
    )
  }
});


module.exports = Box;
