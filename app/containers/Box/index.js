var React = require('react');

var Box = function(props){
  return (
    <div className="box">
      {props.children}
    </div>
  )
}

var Grid = React.createClass({
  getInitialState() {
    let grid=this.generateGrid(this.props.height,this.props.width);
    let context = {
      grid: grid,
      height: this.props.height,
      width: this.props.width,
    };
    this.consoleDisplayGrid(context.grid);
    context = this.addInputs(context, this.props.inputs);
    return {
      context: context
    }
  },
  generateGrid(height, width){
    let grid = [];
    for(let j=0; j<height; j++) {
      grid[j] = [];
      for(let i=0; i<width; i++) {
        grid[j][i] = null;
      }
    }
    return grid;
  },
  addInputs(context, inputs){
    inputs.forEach(function(content){
      //Check for content or container
      if(!content.isFull){
        let local_grid = this.generateGrid(content.height,content.width);
        content["grid"]=local_grid;
      }
      console.log("Adding:");
      console.log(content);
      let temp_context = this.addContentStart(context,content);
      if(temp_context){
        context=temp_context;
      }
    },this);
    return context;
  },
  addContentStart(context, content){
    if(context.isFull){
      return false;
    }
    let grid = context.grid;
    for(let height=0; height<grid.length; height++){
      for(let width=0; width<grid[0].length; width++){
        let origin = [height,width];
        let end = [height+content.height,width+content.width];
        let is_addable = this.isAddable(context, origin,end, content);
        console.log("Is Addable:" + is_addable);
        if(is_addable) {
          //Already added internally
          this.consoleDisplayGrid(context.grid);
          if(is_addable!==true){
            return is_addable;
          }
          context.grid = this.boundedAddContent(grid, content, origin, end);
          this.consoleDisplayGrid(context.grid);
          if(this.isSubsetFull(grid,[0,0],[grid.length,grid[0].length])){
            context.isFull = true;
            console.log("IsFULL"+context)
          }
          return context;
        }
      }
    }
    return false;
  },
  isAddable(context, origin, end, content) {
    let grid = context.grid;
    if(end[0]>grid.length || end[1]>grid[0].length) {
      return false;
    }
    for(let i=origin[0]; i<end[0]; i++) {
      for(let j=origin[1]; j<end[1]; j++) {
        if(grid[i][j]!==null){
          if(grid[i][j]===true || grid[i][j].isFull){
            return false;
          }
          let added_output = this.addContentStart(grid[i][j],content);
          if(added_output){
              context.grid[i][j]=added_output;
              return context;
          }
          return false;
        }
      }
    }
    if(grid[0].length===content.width && grid.length===content.height){
      return false;
    }
    if(origin[1]===0 || grid[origin[0]][0].height===content.height){
      return true;
    }
    return false;
  },
  //Adds content to area
  boundedAddContent(grid, content, origin, end) {
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
      return grid;
  },
  //Returns true if area is full, false otherwise
  isSubsetFull (grid,origin, end) {
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
        if(grid[i][j]!==true){
          if(!grid[i][j].isFull){
            return false;
          }
        }
      }
    }
    return true;
  },
  //Displays a simplified view of the grid to console
  consoleDisplayGrid(grid) {
    grid.map(function(row, index){
      let line = row.map(function(elem) {
        if(elem){
          if(elem===true) {
            return("x");
          }
          else{
            return("y")
          }
        }
        else {
          return("0");
        }
      },this);
      console.log(index + JSON.stringify(line));
    },this)
  },
  theRenderMachine(grid){
    console.log(grid);
    var outside = grid.map(function(child){
      if(child.grid){
        return(
          <Box>
            {theRenderMachine(child.grid)}
          </Box>
        )
      }
      else {
        if(child!==true){
          return(
            <Box>
              {child.content}
            </Box>
          )
        }
        else{
          return true;
        }
      }
    });
    console.log(outside);
    return outside;
  },
  render(){
    return(
      <div>
        {this.theRenderMachine(this.state.context.grid)}
      </div>
    )
  }
});

Grid.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  inputs: React.PropTypes.array.isRequired
}
module.exports = Grid;
