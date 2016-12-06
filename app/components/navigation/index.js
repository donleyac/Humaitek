var React = require('react');
var LinkContainer = require('react-router-bootstrap').LinkContainer;
var Nav = require('react-bootstrap').Nav;
var Navbar = require('react-bootstrap').Navbar;
var NavItem = require('react-bootstrap').NavItem;
require('./styles.scss')

function Navigation(props) {
    return (
      <div>
        <Navbar id="myNav"  collapseOnSelect>
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse className="pages">
            <Nav>
              <LinkContainer to="new"><NavItem className="menu line-hover">Explore</NavItem></LinkContainer>
              <LinkContainer to="explore"><NavItem className="menu line-hover">Technique</NavItem></LinkContainer>
              <LinkContainer to="home"><NavItem className="logo-menu"><div className="logo ready">
                          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                            <rect className="shape" height="100%" width="100%" />
                          </svg>
                          <p>Humaitek</p>
                        </div></NavItem></LinkContainer>
              <LinkContainer to="about"><NavItem className="menu line-hover">Legacy</NavItem></LinkContainer>
              <LinkContainer to="contact"><NavItem className="menu line-hover">Contact</NavItem></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {props.children}
    </div>
    )
}

module.exports = Navigation;
