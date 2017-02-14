import React from 'react';
import './styles.scss';


var Paramount = function(props) {
  return (
    <div className="article">

      <div className="overview">
        <div className="involvement">
          Involvement:
          <span>Design - Minor </span>
          <span>Development - Full </span>
          <a className="website-url" href="http://paramountserv.com/#/">View Client Website</a>
        </div>

      </div>
      <p>
        Paramount Construction is the leading national renovation contractor
        exclusively serving the multi - housing industry. Paramount handles
        everything from the simplest kitchen and bath renovations to the most .
        complex turn - key projects.
      </p>
      <img src={require('./assets/paramount/homepage.png')} />
      <p>
        Similiar to Sarantis Properties, we sought to show off Paramount's work
        in an obvious way through the use of an autoscrolling carousel. However, this time instead of
        the carousel taking a specific width it takes a certain height.
        Therefore since all the images are different the empty space on the right side will vary.
        Since a consitent height for each page was very important to the client this came through the
        design in this manner.
      </p>
      <img src={require('./assets/paramount/slideshow.png')} />
      <p>
        Paramount offers an extensive list of services. As a snapshot, we provided
        a scrollable description of each service. If more detail is required,
        a consistent template is provided for each service. A short description
        at the top, followed by the specific services included and below a row
        of sample examples that display that service in action. When a service example
        is clicked, a gallery is displayed at full screen. Through this we can have
        really nice full size images with useful captions at the top or bottom.
      </p>
      <img src={require('./assets/paramount/clients.png')} />
      <p>
        On the clients page we found that a block of text was not visually appealing
        and so we provided a themed background image. On the other hand,
        the gallery page has a set of images showing off Paramount's work. If you
        click an image it will open a slideshow to that specific image. If the user
        wants to continue scrolling in this view they can.
      </p>
      <img src={require('./assets/paramount/gallery.png')} />
      <p>
        The final page to highlight was within the About Us tab, Leadership page.
        We provide a grid of key Paramount employees. As you hover on the image,
        the name smoothly glides to the top, revealing title and a view bio button.
        On the click of this button, a modal appears. This serves as an employee biography,
        with all relevant facts of the employee. It is important that Paramount's clients
        can identify them by face because it enhances familiarity and understanding.
      </p>
      <img src={require('./assets/paramount/leadership.png')} />
  </div>
  )
}

module.exports = Paramount;
