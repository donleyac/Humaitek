var React = require('react');
var BoxService = require('../../utils/BoxService/index');

//Grid gets width and height props
var Grid = React.createClass({
  getInitialState() {
    var data = BoxService.getData();
    var gridArray=[];
    for(let height=0; height<this.props.height; height++) {
      gridArray[height] = [];
      for(let width=0; width<this.props.height; width++) {
        gridArray[height][width] = null;
      }
    }
    return {
      boxes: data,
      gridArray: gridArray
    };
  },
  addBox(box) {
    var newGrid = this.state.gridArray;
    var boxWidth = box.props.width;
    var boxHeight = box.props.height;

    for(let height=0; height<newGrid.length; height++){
      for(let width=0; width<newGrid.length; width++){
        let origin = [height,width];
        let end = [height+boxHeight,width+boxWidth];
        if(this.verifyArea(origin,end)) {
          return this.boundedAddBox(box, origin, end);
        }
      }
    }
    return false;
  },
  verifyArea(origin, end) {
    let grid = this.state.gridArray;
    let free = 0;
    let area = (end[0]-origin[0])*(end[1]-origin[1]);
    if(grid[origin[0]][origin[1]]===null) {
      for(let i=origin[0]; i<end[0]; i++) {
        for(let j=origin[1]; i<end[1]; j++) {
          if(grid[i][j]===null){
            free++;
            if(free===area){
              console.log("origin: "+origin[0]+","+origin[1]);
              console.log("end: "+end[0]+","+end[1]);
              return true;
            }
          }
          else {
            return false;
          }
        }
      }
    }
    return false;
  },
  boundedAddBox(box, origin, end) {
    let grid = this.state.gridArray;
    grid[origin[0]][origin[1]] = box;
    for(let i=origin[0]+1;i<end[0];i++) {
      for(let j=origin[1]+1;j<end[1];j++){
        grid[i][j]=true;
      }
    }
    return true;
  },
  render(){
    this.addBox(this.state.boxes[0],0);
    return(
      <div>
        {this.state.gridArray}
      </div>
    )
  }
});

module.exports = Grid;
