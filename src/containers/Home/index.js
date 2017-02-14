import React from 'react';
import {Link} from 'react-router';
import Grid from '../Box/index';
import Lightbox from '../../components/lightbox/index';
import {Button} from 'antd';
import './styles.scss';


var BoxContainer = function (props){
  var boxClass = "";
  boxClass+=props.isCaptioned?" captioned":"";
  boxClass+=props.containsImg?" imaged":"";
  return (
    <span className={boxClass}>
      {props.children}
    </span>
  )
}
var BackgroundImg = function (props){
  let bk_div={ backgroundImage: 'url(' + props.image + ')'};
  return (
    <div className="bk_img" style={bk_div}/>
  )
}
var Caption = function (props){
  return(
    <div className="caption"><p>{props.caption}</p></div>
  )
}
var GridLightbox = function(props){
  return(
    <Lightbox className="lightbox" attr={props.attr} >
      {props.children}
    </Lightbox>
  )
}
var ViewArticle = function(props){
  return (
    <Link to={props.to}><Button>View the full article!</Button></Link>
  )
}

var Home = React.createClass({
  render: function(){
    var inputs = [
      {width: 1,height:3},
      {width: 2,height:3},
      {content: (<BoxContainer isCaptioned containsImg>
        <GridLightbox
          attr={{
            titles: [(<ViewArticle to="/paramount" />),
                    (<ViewArticle to="/paramount" />),
                    (<ViewArticle to="/paramount" />),
                    (<ViewArticle to="/paramount" />)],
            images: [
              require('../Articles/assets/paramount/homepage.png'),
              require('../Articles/assets/paramount/gallery.png'),
              require('../Articles/assets/paramount/clients.png'),
              require('../Articles/assets/paramount/slideshow.png')],
            captions: ['','','','']
          }}>
          <BackgroundImg image={require('./assets/paramount.jpg')}/>
        </GridLightbox>
        <Caption caption="Paramount Construction" /></BoxContainer>),
        width: 1, height:3, isFull:true},
        {content: (<BoxContainer isCaptioned containsImg>
          <GridLightbox
            attr={{
              titles: [(<ViewArticle to="/zuzu" />),
                      (<ViewArticle to="/zuzu" />),
                      (<ViewArticle to="/zuzu" />),
                      (<ViewArticle to="/zuzu" />)],
              images: [
                require('../Articles/assets/zuzu/homepage.png'),
                require('../Articles/assets/zuzu/menu.png'),
                require('../Articles/assets/zuzu/menu_items.png')],
              captions: ['','','','']
            }}>
            <BackgroundImg image={require('./assets/zuzu.jpg')}/>
          </GridLightbox>
          <Caption caption="Zuzu Cuisine" /></BoxContainer>),
          width: 2, height:1, isFull:true},
          {content: (<p className="slogan">
            <span className="emph-text-main">Humaitek</span> is a design and innovation studio based in <span className="emph-text-main">Washington, D.C.</span> We design
            <span className="emph-text-main"> websites</span>,
            <span className="emph-text-main"> books</span>,
            <span className="emph-text-main"> posters</span>,
            <span className="emph-text-main"> films</span>,
            <span className="emph-text-main"> products</span>,
            <span className="emph-text-main"> architecture</span>, and
            <span className="emph-text-main"> interiors</span>.
            Let us work with you to create an expression of art.
          </p>),
            width: 2, height:2, isFull:true},
        {content: (<BoxContainer isCaptioned containsImg>
          <GridLightbox
            attr={{
              titles: ['EventMapper Homepage','Upcoming and Trending Events',
              'Create an Event', 'Find your Event'],
              images: [
                require('../Articles/assets/eventmapper/Home.png'),
                require('../Articles/assets/eventmapper/home-dashboard.png'),
                require('../Articles/assets/eventmapper/create-event.png'),
                require('../Articles/assets/eventmapper/mapview-eventinfo.png')],
              captions: ['','','']
            }}>
            <BackgroundImg image={require('./assets/eventmapper.jpg')}/>
          </GridLightbox>
          <Caption caption="Event Mapper" /></BoxContainer>),
          width: 2, height:1, isFull:true},
      {width: 1,height:3},
      {width: 2,height:2},
      {width: 2,height:2},
      {width: 1,height:3},

        {content: (<BoxContainer isCaptioned containsImg>
          <GridLightbox
            attr={{
              titles: [(<ViewArticle to="/sarantis" />),
                      (<ViewArticle to="/sarantis" />)],
              images: [
                require('../Articles/assets/sarantis/carousel.png'),
                require('../Articles/assets/sarantis/commercial.png')],
              captions: ['','']
            }}>
              <BackgroundImg image={require('./assets/sarantis.jpg')}/>
            </GridLightbox>
            <Caption caption="Sarantis Properties" /></BoxContainer>),
          width: 1, height:3, isFull:true},
      {content: (<BoxContainer isCaptioned containsImg>
        <BackgroundImg image={require('./assets/metropolitian.jpg')}/>
        <Caption caption="Metropolitian Carpet" /></BoxContainer>),
        width: 2,height:1,isFull:true},
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
