var React = require('react');
var Hero = require('re-bulma').Hero;
var HeroBody = require('re-bulma').HeroBody;
var Container = require('re-bulma').Container;
var Title = require('re-bulma').Title;
var Subtitle = require('re-bulma').Subtitle;

function Projects(props){
    return(
      <div className="project">
        <Hero size="isFullheight" color="isSuccess">
          <img src="http://lorempixel.com/400/200" />

        </Hero>
      </div>
    )
}

module.exports=Projects;
