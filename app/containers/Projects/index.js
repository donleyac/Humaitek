var React = require('react');
require('./styles.scss');

var Projects = React.createClass({
  render:function(){
    return(
      <div className="project">
        <section class="hero is-success is-fullheight">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Full Height title
              </h1>
              <h2 class="subtitle">
                Full Height subtitle
              </h2>
          </div>
        </div>
      </section>
      </div>
    )
  }
});

module.exports=Projects;