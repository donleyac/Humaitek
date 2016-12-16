var React = require('react');
var Affix = require('antd').Affix;
var Leadership = require('../Leadership/index');
var Sarantis = require('../Articles/sarantis');
var Paramount = require('../Articles/paramount');
var Hero = require('re-bulma').Hero;
var HeroBody = require('re-bulma').HeroBody;
var Container = require('re-bulma').Container;
var Title = require('re-bulma').Title;
var Subtitle = require('re-bulma').Subtitle;


require('./styles.scss');

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
      <Hero color="isPrimary">
      <HeroBody>
        <button onClick={() => this.handleSlideClick(-1)}><img src={require('./assets/left_arrow.png')} /></button>
        <Container hasTextCentered>
          <Title>{page.title}</Title>
        </Container>
        <button onClick={() => this.handleSlideClick(1)}><img src={require('./assets/right_arrow.png')} /></button>
      </HeroBody>
    </Hero>
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
