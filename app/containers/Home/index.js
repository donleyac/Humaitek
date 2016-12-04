var React = require('react');
var Grid = require('../Box/index')


var Home = React.createClass({
  render: function(){
    var inputs = [
      //container
      {width: 4,height:1},
      {content: (<p>About Us</p>),
        width: 1,
        height:1,
        isFull:true},
      {content: (<p>What's New</p>),
        width: 1,
        height:1,
        isFull:true},
      {content: (<p>Explore</p>),
        width: 1,
        height:1,
        isFull:true},
      {content: (<p>Contact</p>),
        width: 1,
        height:1,
        isFull:true},

      //container
      {width: 1,height:3},
      {width: 2,height:3},
      {content: (<p>Humaitek</p>),
        width: 2,
        height:2,
        isFull:true},
      {width: 2,height:3},
      {content: (<p>Lower Humaitek</p>),
        width: 2,
        height:1,
        isFull:true},
      {width: 1,height:3},
      {width: 2,height:2},
      {width: 2,height:2},
      {width: 1,height:3},
      {content: (<p>LeftSide</p>),
        width: 1,
        height:2,
        isFull:true},
      {content: (<p>LowerLeftSide</p>),
        width: 1,
        height:1,
        isFull:true},
      {content: (<p>Deeper Left LeftSide</p>),
        width: 2,
        height:1,
        isFull:true},
      {content: (<p>Under Right</p>),
        width: 1,
        height:1,
        isFull:true},
      {content: (<p>Right Column</p>),
        width: 1,
        height:2,
        isFull:true},
      {content: (<p>Way bottom right Column</p>),
        width: 2,
        height:2,
        isFull:true},
      {content: (<p>Deepest Left LeftSide</p>),
        width: 2,
        height:1,
        isFull:true}
      ];
    return(
      <div>
        <Grid inputs={inputs} width={4} height={6}>
        </Grid>
      </div>
      )
    }
});

module.exports = Home;
