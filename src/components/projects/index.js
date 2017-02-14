import React = require('react');
import {Hero, HeroBody, Container, Title, Subtitle} from 're-bulma';

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
