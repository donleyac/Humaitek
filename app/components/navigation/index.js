var React = require('react');
var LinkContainer = require('react-router-bootstrap').LinkContainer;
var Affix = require('antd').Affix;

require('./styles.scss')


var Navigation = React.createClass({
    render(){
      window.addEventListener('scroll', function(e){
        let distanceY = window.pageYOffset || document.documentElement.scrollTop;
        let shrinkOn = 70;
        let navbar = document.getElementById("navbar");
        if (distanceY > shrinkOn) {
          navbar.classList.add("smaller")
        }
        else {
          if (navbar.classList.contains("smaller")) {
            navbar.classList.remove("smaller");
          }
        }
      });
      return (
        <div className="wrapper">
          <Affix>
            <div id="navbar">
              <LinkContainer to="new"><div className="link line-hover"><p>Explore</p></div></LinkContainer>
              <LinkContainer to="/">
                <div className="logo-container">
                  <div className="logo">
                    <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                      <rect className="shape" height="100%" width="100%" />
                    </svg>
                    <p>Humaitek</p>
                  </div>
                </div>
              </LinkContainer>
              <LinkContainer to="contact"><div className="link line-hover"><p>Contact</p></div></LinkContainer>
            </div>
        </Affix>
          {this.props.children}
        </div>
    )
  }
});

module.exports = Navigation;
