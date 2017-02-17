import React from 'react';
import {Card} from 'antd';
import DocumentMeta from 'react-document-meta';
import './styles.scss';

var LeadCard = function(props) {
  return(
    <div className="flip-container" onTouchStart="this.classList.toggle('hover');">
      <Card bodyStyle={{ padding: 0, margin: '10px' }}>
        <div className="front">
            <img className="profile-image" alt={props.alt} width="100%" src={props.src} />
            <div className="details">
              <h3>{props.name}</h3>
              <p>{props.title}</p>
            </div>
        </div>
        <div className="back">
            <img className="small-image" alt={props.alt} src={props.src} />
            <div className="details">
              <a href={props.githubLink}>{props.githubName}</a>
              <p>{props.descr}</p>
            </div>
        </div>
      </Card>
    </div>
  )
}

var Leadership = function(props) {
  const meta = {
    title: 'Leadership - Humaitek',
    description: 'The leadership understands cutting edge software best practices to get your website efficient and modern.',
    canonical:'http://humaitek.com/#/explore',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'web, development, design, react, studio, dmv, dc, javascript, html, css'
      }
    }
  };
  return (
  <div className="leadership">
    <DocumentMeta {...meta} />
    <LeadCard alt="Alex Donley" src={require('./assets/alex_donley.jpg')}
      name="Alexander Donley" title="Creative Director" githubLink="https://github.com/donleyac"
      githubName="@donleyac" descr="Everything JS! React Component Maker. Let's feel the SASS and Style"
    />
    <LeadCard alt="Ali Shaikh" src={require('./assets/ali_shaikh.jpg')}
      name="Ali Shaikh" title="Systems Architect" githubLink="https://github.com/AliShaikh94"
      githubName="@AliShaikh94" descr="The universe is a 0 sum game."
    />
  </div>
  )
}

module.exports = Leadership;
