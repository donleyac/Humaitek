var React = require('react');

//Proptypes -> Width, Height, Date, Category
var Box = React.createClass({
  getProps () {
    return [
      this.props.width,
      this.props.height,
      this.props.date,
      this.props.category
    ]
  },
  render(){
    return (
      <div className="box">
        {this.props.children}
      </div>
    )
  }
});


module.exports = Box;
