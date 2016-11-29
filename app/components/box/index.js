var React = require('react');

//Proptypes -> Width, Height, Date, Category
var Box = React.createClass({
  render(){
    var style = {
      //width: (this.props.reference * this.props.width-10),
      height:(this.props.reference * this.props.height),
      background: "grey"
    };
    return (
      <div style={style} className={this.props.className}>
        {this.props.reference*this.props.width}
        {this.props.children}
      </div>
    )
  }
});


module.exports = Box;
