import React from 'react';
import {Affix} from 'antd';
import Leadership from '../Leadership/index';
import Sarantis from '../Articles/sarantis';
import Paramount from '../Articles/paramount';
import Zuzu from '../Articles/zuzu';
import {Hero, HeroBody, Container, Title, Subtitle} from 're-bulma';
import './styles.scss';

var Explore = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getExplorable(){
    return [
      {title:"Leadership", route: Leadership},
      {title:"Zuzu Cuisine", route:Zuzu},
      {title:"Paramount Construction", route: Paramount},
      {title:"Sarantis Properties", route: Sarantis},
    ]
  },
  getPageIndex(){
    let index = parseInt(this.props.location.query.index);
    if (isNaN(index)){
      return 0;
    }
    return index;
  },
  setPageIndex(new_index){
    let max_index = this.getExplorable().length - 1;
    if(new_index < 0){
      new_index = max_index;
    }
    if(new_index > max_index) {
      new_index = 0;
    }
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
    return (
    <div>
      <Hero color="isLight">
      <HeroBody>
        <button className="emph-background" onClick={() => this.handleSlideClick(-1)}>
          <i className="material-icons">keyboard_arrow_left</i></button>
        <Container hasTextCentered>
          <Title>{page.title}</Title>
        </Container>
        <button className="emph-background" onClick={() => this.handleSlideClick(1)}>
          <i className="material-icons">keyboard_arrow_right</i></button>
      </HeroBody>
    </Hero>
      <div className="spacing" />
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
