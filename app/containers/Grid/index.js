var React = require('react');
var BoxService = require('../../utils/BoxService/index');

var Grid = React.createClass({
  render: function(){
    var data = BoxService.getData();
    var gridArray=[];
    for(let height=0; height<this.props.height; height++) {
      gridArray[height] = [];
      for(let width=0; width<this.props.height; width++) {
        gridArray[height][width] = null;
      }
    }

    //populate grid based on data, set required positions first, 
    return(
    )
  }
});

module.exports = Grid;
