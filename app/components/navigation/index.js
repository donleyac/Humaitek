var React = require('react');
var LinkContainer = require('react-router-bootstrap').LinkContainer;
var Affix = require('antd').Affix;

require('./styles.scss')

var Navigation = React.createClass({
    render(){
      window.addEventListener('scroll', function(e){
        let distanceY = window.pageYOffset || document.documentElement.scrollTop;
        let shrinkOn = 90;
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
              <LinkContainer to="leadership"><div className="link line-hover">
                <p>Explore</p>
                <img className="icons" src={require('./assets/explore.png')}></img>
              </div></LinkContainer>
              <LinkContainer to="/">
                <div className="logo-container">
                  <div className="logo">
                    <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                      <rect className="shape" height="100%" width="100%" />
                    </svg>
                    <p>Humaitek</p>
                    <img className="normal icons" src={require('./assets/home_black.png')}></img>
                    <img className="inverse icons" src={require('./assets/home_white.png')}></img>
                  </div>
                </div>
              </LinkContainer>
              <LinkContainer to="contact"><div className="link line-hover">
                <p>Contact</p>
                <img className="icons" src={require('./assets/feedback.png')}></img>
              </div></LinkContainer>
            </div>
          </Affix>
          {this.props.children}
        </div>
    )
  }
});

module.exports = Navigation;
