var React = require('react');
var Link = require('react-router').Link;
require('./styles.scss');

var Home = React.createClass({
  render: function(){
    var inputs = [
      //container
      {width: 1,height:3},
      {width: 2,height:3},
      {width: 2,height:3},
      {content: (<p className="slogan">
        <span className="text-emph">Humaitek</span> is a design and innovation studio based in <span className="text-emph">Washington, D.C.</span> We design
        <span className="text-emph"> websites</span>,
        <span className="text-emph"> books</span>,
        <span className="text-emph"> posters</span>,
        <span className="text-emph"> films</span>,
        <span className="text-emph"> products</span>,
        <span className="text-emph"> architecture</span>, and
        <span className="text-emph"> interiors</span>. Let us work with you to create an expression of art.
      </p>),
        width: 2,
        height:2,
        isFull:true},
      {content: (<Link to=""><img className="img-responsive" src={require('./assets/eventmapper.jpg')}></img></Link>),
        width: 2,
        height:1,
        isFull:true},
      {width: 1,height:3},
      {width: 2,height:2},
      {width: 2,height:2},
      {width: 1,height:3},
      {content: (<Link to=""><img className="img-responsive" src={require('./assets/paramount.jpg')}></img></Link>),
        width: 1,
        height:2,
        isFull:true},
      {content: (<Link to=""><img className="img-responsive" src={require('./assets/grid.jpg')}></img></Link>),
        width: 1,
        height:1,
        isFull:true},
      {content: (<Link to=""><img className="img-responsive" src={require('./assets/vrgame.jpg')}></img></Link>),
        width: 2,
        height:1,
        isFull:true},
      {content: (<Link to=""><img className="img-responsive" src={require('./assets/metropolitian.jpg')}></img></Link>),
        width: 1,
        height:1,
        isFull:true},
      {content: (<Link to=""><img className="img-responsive" src={require('./assets/sarantis.jpg')}></img></Link>),
        width: 1,
        height:2,
        isFull:true},
      {content: (<Link to=""><img className="img-responsive" src={require('./assets/control.jpg')}></img></Link>),
        width: 2,
        height:1,
        isFull:true}
      ];
    return(
      <div>
        <Grid inputs={inputs} width={4} height={4}>
        </Grid>
      </div>
      )
    }
});

module.exports = Home;
