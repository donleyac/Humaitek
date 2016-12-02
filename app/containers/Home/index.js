var React = require('react');
var Box = require('../Box/index')

var Home = React.createClass({
  handleResize() {
    var w = window,
    d = document,
    documentElement = d.documentElement,
    grid = d.getElementById('grid'),
    width = w.innerWidth || documentElement.clientWidth || grid.clientWidth,
    height = w.innerHeight|| documentElement.clientHeight|| grid.clientHeight;
    this.setState({width: width, height: height});
  },
  componentWillMount: function() {
    this.handleResize();
  },
  componentDidMount: function() {
    window.addEventListener("resize", this.handleResize);
  },
  componentWillUnmount: function() {
    window.removeEventListener("resize", this.handleResize);
  },
  render: function(){
    var inputs = [
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
        
      {width: 1,height:3},
      {width: 1,height:3},
      {width: 2,height:3},
      {width: 1,height:3},
      {width: 2,height:2},
      {width: 2,height:2},
      {width: 1,height:3},

      {content: (<p>Humaitek</p>),
        width: 2,
        height:2,
        isFull:true},
      {width: 2,
        height:1,
      }];
    return(
      <div>
        <Box inputs={inputs} width={4} height={6}>
        </Box>
      </div>
      )
    }
});

module.exports = Home;
