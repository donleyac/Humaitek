var React = require('react');
var LinkContainer = require('react-router-bootstrap').LinkContainer;
var Nav = require('react-bootstrap').Nav;
var Navbar = require('react-bootstrap').Navbar;
var NavItem = require('react-bootstrap').NavItem;

function Navigation(props) {
    return (
      <div>
        <Navbar id="myNav"  collapseOnSelect>
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse className="pages">
            <Nav>
              <LinkContainer to="/new"><NavItem className="menu line-hover">What's New</NavItem></LinkContainer>
              <LinkContainer to="/explore"><NavItem className="menu line-hover">Explore</NavItem></LinkContainer>
              <LinkContainer to="/about"><NavItem className="menu line-hover">About Us</NavItem></LinkContainer>
              <LinkContainer to="/contact"><NavItem className="menu line-hover">Contact</NavItem></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {props.children}
    </div>
    )
}

module.exports = Navigation;
