var React = require('react');

//Proptypes -> Width, Height, Date, Category
function Box(props) {
  return (
    <div className="box">
      {props.children}
    </div>
  )
}

module.exports = Box;
