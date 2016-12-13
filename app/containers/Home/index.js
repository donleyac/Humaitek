var React = require('react');
var Link = require('react-router').Link;
var Grid = require('../Box/index');
var Lightbox = require('../../components/lightbox/index');
var Button = require('antd').Button;
require('./styles.scss');

//Props -> images, className, titles, captions
var GridLightbox = function(props){
  return(
    <Lightbox className="lightbox" attr={props.attr} >
      <img className="img-responsive" src={props.thumbNail}/>
    </Lightbox>
  )
}

var Home = React.createClass({
  render: function(){
    var inputs = [
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
        width: 2, height:2, isFull:true},
      {content: (<span id="event" className="captioned">
        <GridLightbox thumbNail={require('./assets/eventmapper.jpg')}
          attr={{
            titles: ['EventMapper Homepage','Upcoming and Trending Events','Create an Event', 'Find your Event'],
            images: [
              require('../Articles/assets/eventmapper/Home.png'),
              require('../Articles/assets/eventmapper/home-dashboard.png'),
              require('../Articles/assets/eventmapper/create-event.png'),
              require('../Articles/assets/eventmapper/mapview-eventinfo.png')],
            captions: ['','','']
          }} />
        <div className="caption"><p>Event Mapper</p></div></span>),
        width: 2, height:1, isFull:true},
      {width: 1,height:3},
      {width: 2,height:2},
      {width: 2,height:2},
      {width: 1,height:3},

      {content: (<span id="paramount"  className="captioned">
        <GridLightbox thumbNail={require('./assets/paramount.jpg')}
          attr={{
            titles: [(<Link to="/paramount"><Button>View the full article!</Button></Link>),
                      (<Link to="/paramount"><Button>View the full article!</Button></Link>),
                      (<Link to="/paramount"><Button>View the full article!</Button></Link>),
                      (<Link to="/paramount"><Button>View the full article!</Button></Link>)],
            images: [
              require('../Articles/assets/paramount/carousel.png'),
              require('../Articles/assets/paramount/turnkey.png'),
              require('../Articles/assets/paramount/case_study.png'),
              require('../Articles/assets/paramount/leadership.png')],
            captions: ['','','','']
          }} />
        <div className="caption"><p>Paramount Construction</p></div></span>),
        width: 1, height:2, isFull:true},

      {content: (<span id="grid"  className="captioned">
        <Link to=""><img className="img-responsive" src={require('./assets/grid.jpg')}></img></Link>
        <div className="caption"><p>React Grid Layout</p></div></span>),
        width: 1,height:1,isFull:true},

      {content: (<span id="vrgame"  className="captioned">
        <Link to=""><img className="img-responsive" src={require('./assets/vrgame.jpg')}></img></Link>
        <div className="caption"><p>Mixed Reality Horror Game</p></div></span>),
        width: 2,height:1,isFull:true},

      {content: (<span id="metropolitian"  className="captioned">
        <Link to=""><img className="img-responsive" src={require('./assets/metropolitian.jpg')}></img></Link>
        <div className="caption"><p>Metropolitian Carpet</p></div></span>),
        width: 1,height:1,isFull:true},
      {content: (<span id="sarantis"  className="captioned">
        <GridLightbox thumbNail={require('./assets/sarantis.jpg')}
          attr={{
            titles: [(<Link to="/sarantis"><Button>View the full article!</Button></Link>),
                      (<Link to="/sarantis"><Button>View the full article!</Button></Link>)],
            images: [
              require('../Articles/assets/sarantis/carousel.png'),
              require('../Articles/assets/sarantis/commercial.png')],
            captions: ['','']
          }} />
        <div className="caption"><p>Sarantis Properties</p></div></span>),
        width: 1,
        height:2,
        isFull:true},
      {content: (<span id="control"  className="captioned"><Link to=""><img className="img-responsive" src={require('./assets/control.jpg')}></img></Link>
                <div className="caption"><p>Control - Book</p></div></span>),
        width: 2,
        height:1,
        isFull:true}
      ];
    return(
      <div className="home">
        <Grid inputs={inputs} width={4} height={4}>
        </Grid>
      </div>
      )
    }
});

module.exports = Home;
