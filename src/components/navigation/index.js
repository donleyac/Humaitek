import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Affix} from 'antd';

require('./styles.scss')

var Navigation = React.createClass({
    render(){
      return (
        <div className="wrapper">
          <div id="navbar">
            <LinkContainer to="explore"><div className="link line-hover emph-text-main">
              <p>Explore</p>
              <i className="material-icons">explore</i>
            </div></LinkContainer>
            <LinkContainer to="/">
              <div className="logo-container">
                <div className="logo">
                  <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <rect className="shape" height="100%" width="100%" />
                  </svg>
                  <p>Humaitek</p>
                  <i className="material-icons">home</i>
                </div>
              </div>
            </LinkContainer>
            <LinkContainer to="contact"><div className="link line-hover emph-text-main">
              <p>Contact</p>
              <i className="material-icons">feedback</i>
            </div></LinkContainer>
          </div>
          {this.props.children}
        </div>
    )
  }
});

module.exports = Navigation;
