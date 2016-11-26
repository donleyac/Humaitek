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
  addBox(box,index) {
    var newGrid = this.state.gridArray;
    var boxWidth = box.props.width;
    var boxHeight = box.props.height;

    for(let height=0; height<newGrid.length; height++){
      for(let width=0; width<newGrid.length; width++){
        let origin = [height,width];
        let end = [height+boxHeight,width+boxWidth];
        if(this.verifyArea(newGrid, origin,end)) {
          this.boundedAddBox(newGrid, box,index, origin, end);
        }
      }
    }
    return false;
  },
  verifyArea(grid, origin, end) {
    console.log(origin);
    console.log(grid);
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
  boundedAddBox(grid, content, index, origin, end) {
    grid[origin[0]][origin[1]]=content;
    for(let i=origin[0]+1;i<end[0];i++) {
      for(let j=origin[1]+1;j<end[1];j++){
        grid[i][j]=index;
      }
    }
  },
  render(){
    this.addBox(this.state.boxes[0],0);
    this.state.gridArray.map(function(row){
      row.map(function(box) {
        return (
          <div>
            {box.props.children}
          </div>
        )
      });
    });
    //populate grid based on data, set required positions first,
    return(
      <div>
        <p>{this.state.gridArray.toString()}</p>
        <p>{this.state.gridArray.toString()}</p>
      </div>
    )
  }
});

module.exports = Grid;
