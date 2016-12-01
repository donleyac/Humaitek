var React = require('react');
require('./styles.scss');

function Box(height, width, isFull, content) {
  this.height = height;
  this.width = width;
  this.isFull = isFull || false;
  this.content = content || "";

  let symbol = isFull ? true:null;
  let grid = [];
  for(let j=0; j<height; j++) {
    grid[j] = [];
    for(let i=0; i<width;i++) {
      grid[j][i] = symbol;
    }
  }
  this.grid = grid;
}

Box.prototype.addContent = function(content){
  if(this.isFull){
    return false;
  }
  var grid = this.grid;
  var content_width = content.width;
  var content_height = content.height;
  for(let height=0; height<grid.length; height++){
    for(let width=0; width<grid.length; width++){
      let origin = [height,width];
      let end = [height+content_height,width+content_width];
      if(this.isSubsetEmpty(origin,end)) {
        //Is this leftmost content or is it equal to leftmost content's height
        if(width===0 || grid[height][0].height===content.height){
          if(this.boundedAddContent(content, origin, end)){
            if(this.isSubsetFull([0,0],[grid.length,grid[0].length])){
              this.isFull = true;
            }
            return true;
          }
        }
        //console.log("Height- False " + origin + ", " + end);
      }
    }
  }
  return false;
};
//Adds content to area, returns false if cannot place
Box.prototype.boundedAddContent = function(content, origin, end) {
  if(this.isSubsetEmpty(origin,end)){
    let grid = this.grid;
    for(let i=origin[0];i<end[0];i++) {
      for(let j=origin[1];j<end[1];j++){
        if(i===origin[0] && j===origin[1]) {
          grid[i][j] = content;
        }
        else{
          grid[i][j]=true;
        }
      }
    }
    return true;
  }
  return false;
};

//Returns true if area is full, false otherwise
Box.prototype.isSubsetFull = function (origin, end) {
  let grid = this.grid;
  if(end[0]>grid.length) {
    end[0]=grid.length;
  }
  if(end[1]>grid[0].length){
    end[1]=grid[0].length;
  }
  for(let i=origin[0]; i<end[0]; i++) {
    for(let j=origin[1]; j<end[1]; j++) {
      if(grid[i][j]===null){
        return false;
      }
    }
  }
  //console.log("isSubsetFull - True " + origin + ", " + end);
  return true;
};
//Returns true if area is empty, false otherwise
Box.prototype.isSubsetEmpty=function(origin, end) {
  //console.log("isSubsetEmpty" + origin + ", " + end);
  let grid = this.grid;
  if(end[0]>grid.length || end[1]>grid[0].length) {
    return false;
  }//passes
  for(let i=origin[0]; i<end[0]; i++) {
    for(let j=origin[1]; j<end[1]; j++) {
      if(grid[i][j]!==null){
        //console.log("isSubsetEmpty - False " + origin + ", " + end);
        return false;
      }
    }
  }
  return true;
};
//Displays a simplified view of the grid to console
Box.prototype.consoleDisplayGrid=function () {
  console.log(this.props.width + "x" + this.props.height);
  this.grid.map(function(row, index){
    let line = row.map(function(elem) {
      if(elem){
        return("x");
      }
      else {
        return("0");
      }
    },this);
    console.log(index + JSON.stringify(line));
  },this)
};

var Grid = React.createClass({
  //Creates an empty grid to input size, setup isFull
  getInitialState() {
    var grid=[];
    var isFull = this. props.isFull || false;
    var symbol = isFull ? true:null;
    for(let height=0; height<this.props.height; height++) {
      grid[height] = [];
      for(let width=0; width<this.props.width; width++) {
        grid[height][width] = symbol;
      }
    }
    return {
      grid: grid,
      isFull: isFull
    };
  },
  //Iterates the grid, finding an empty space to place the content
  addContent(content) {
    if(this.state.isFull){
      return false;
    }
    console.log(content.props.width + "x" + content.props.height);
    var grid = this.state.grid;
    var content_width = content.props.width;
    var content_height = content.props.height;
    for(let height=0; height<grid.length; height++){
      for(let width=0; width<grid.length; width++){
        let origin = [height,width];
        let end = [height+content_height,width+content_width];
        if(this.isSubsetEmpty(origin,end)) {
          //Is this leftmost content or is it equal to leftmost content's height
          if(width===0 || grid[height][0].props.height===content.props.height){
            if(this.boundedAddContent(content, origin, end)){
              if(this.isSubsetFull([0,0],[grid.length,grid[0].length])){
                this.state.isFull = true;
              }
              return true;
            }
          }
          //console.log("Height- False " + origin + ", " + end);
        }
      }
    }
    return false;
  },
  //Adds content to area, returns false if cannot place
  boundedAddContent(content, origin, end) {
    if(this.isSubsetEmpty(origin,end)){
      let grid = this.state.grid;
      for(let i=origin[0];i<end[0];i++) {
        for(let j=origin[1];j<end[1];j++){
          if(i===origin[0] && j===origin[1]) {
            grid[i][j] = content;
          }
          else{
            grid[i][j]=true;
          }
        }
      }
      return true;
    }
    return false;
  },

  //Returns true if area is full, false otherwise
  isSubsetFull(origin, end) {
    let grid = this.state.grid;
    if(end[0]>grid.length) {
      end[0]=grid.length;
    }
    if(end[1]>grid[0].length){
      end[1]=grid[0].length;
    }
    for(let i=origin[0]; i<end[0]; i++) {
      for(let j=origin[1]; j<end[1]; j++) {
        if(grid[i][j]===null){
          return false;
        }
      }
    }
    //console.log("isSubsetFull - True " + origin + ", " + end);
    return true;
  },
  //Returns true if area is empty, false otherwise
  isSubsetEmpty(origin, end) {
    //console.log("isSubsetEmpty" + origin + ", " + end);
    let grid = this.state.grid;
    if(end[0]>grid.length || end[1]>grid[0].length) {
      return false;
    }//passes
    for(let i=origin[0]; i<end[0]; i++) {
      for(let j=origin[1]; j<end[1]; j++) {
        if(grid[i][j]!==null){
          //console.log("isSubsetEmpty - False " + origin + ", " + end);
          return false;
        }
      }
    }
    return true;
  },
  //Displays a simplified view of the grid to console
  consoleDisplayGrid () {
    console.log(this.props.width + "x" + this.props.height);
    this.state.grid.map(function(row, index){
      let line = row.map(function(elem) {
        if(elem===true){
          return("x");
        }
        else if(elem){
          if(elem.state.isFull)
          {
            return ("x");
          }
          return("c");
        }
        else {
          return("0");
        }
      },this);
      console.log(index + JSON.stringify(line));
    },this)
  },
  render(){
    console.log("Box Size: " + this.props.width + "x" + this.props.height);
    console.log(this.props.children);
    if (!this.state.isFull){
      React.Children.forEach(this.props.children, function(child){
        this.addContent(child);
      },this);
    }
    this.consoleDisplayGrid();
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
});

Box.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  isFull: React.PropTypes.bool
}
module.exports = Grid;
