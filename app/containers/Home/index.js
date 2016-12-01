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
    return(
      <div>
        <Box hasGrid={true} width={4} height={6}>
          <Box  width={4} height={1} isFull={true}>
            <Box width={1} height={1} isFull={true}>About Us</Box>
            <Box width={1} height={1} isFull={true}>What's New</Box>
            <Box width={1} height={1} isFull={true}>Explore</Box>
            <Box width={1} height={1} isFull={true}>Contact</Box>
          </Box>
          <Box width={1} height={3}></Box>
          <Box width={2} height={3}>
            <Box width={2} height={2} isFull={true}>Humaitek</Box>
            <Box width={2} height={1}></Box>
          </Box>
          <Box width={1} height={3}></Box>
          <Box width={2} height={2}></Box>
          <Box width={2} height={2}></Box>
        </Box>
      </div>
      )
    }
});

module.exports = Home;
