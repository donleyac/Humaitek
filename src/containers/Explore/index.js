import React from 'react';
import {Affix} from 'antd';
import Leadership from '../Leadership/index';
import Sarantis from '../Articles/sarantis';
import Paramount from '../Articles/paramount';
import {Hero, HeroBody, Container, Title, Subtitle} from 're-bulma';
import './styles.scss';

var Explore = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getExplorable(){
    return [
      {title:"Leadership", route: Leadership},
      {title:"Sarantis Properties", route: Sarantis},
      {title:"Paramount Construction", route: Paramount}
    ]
  },
  getPageIndex(){
    let index = parseInt(this.props.location.query.index);
    console.log("getPageIndex: " + index);
    if (isNaN(index)){
      return 0;
    }
    return index;
  },
  setPageIndex(new_index){
    console.log("Input setPageIndex " + new_index);
    let max_index = this.getExplorable().length - 1;
    if(new_index < 0){
      new_index = max_index;
    }
    if(new_index > max_index) {
      new_index = 0;
    }
    console.log("Output setPageIndex " + new_index);
    this.context.router.push({
      pathname: '/explore',
      query: {index: new_index}
    })
  },
  handleSlideClick(direction, e){
    this.setPageIndex(this.getPageIndex() + direction);
  },
  displayContent(){
    let page = this.getExplorable()[this.getPageIndex()];
    console.log("Page Route: " +page.route);
    return (
    <div>
      <Hero color="isLight">
      <HeroBody>
        <button onClick={() => this.handleSlideClick(-1)}><img src={require('./assets/left_arrow.png')} /></button>
        <Container hasTextCentered>
          <Title>{page.title}</Title>
        </Container>
        <button onClick={() => this.handleSlideClick(1)}><img src={require('./assets/right_arrow.png')} /></button>
      </HeroBody>
    </Hero>
      <div className="spacing"></div>
      <page.route />
    </div>)
  },
  render(){
    return(
      <div className="explore">
        {this.displayContent()}
      </div>
    )
  }
});

module.exports = Explore;
