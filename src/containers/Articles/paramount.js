import React from 'react';
import './styles.scss';


var Paramount = function(props) {
  return (
    <div className="article">

      <div className="overview">
        <div className="involvement">
          Involvement:
          <span>Design - Half </span>
          <span>Development - In Progress </span>
          <a className="website-url" href="http://test.paramountserv.com">View Client Website</a>
        </div>

      </div>
      <p>
        Paramount Construction is the leading national renovation contractor
        exclusively serving the multi - housing industry. Paramount handles
        everything from the simplest kitchen and bath renovations to the most .
        complex turn - key projects.
      </p>
      <p>
        Similiar to Sarantis Properties, we sought to show off Paramount's work
        in an obvious way through the use of an autoscrolling carousel. However,
        there is a twist since these carousels maintain a caption which provided
        context and can be clicked to take you to page that details that specific process further.
      </p>
      <p>
        Paramount offers an extensive list of services. As a snapshot, we provided
        a scrollable description of each service. If more detail is required,
        a consistent template is provided for each service. A short description
        at the top, followed by the specific services included and below a row
        of sample examples that display that service in action. When a service example
        is clicked, a gallery is displayed at full screen. Through this we can have
        really nice full size images with useful captions at the top or bottom.
      </p>
      <p>
        Case Studies were an idea to have a more in-depth description about key projects.
        The theory behind the idea was that it provides an outlet for Paramount
        to display their knowledge, expertise, and service while tying it to
        tangible work to the client.
      </p>
      <p>
        The final page to highlight was within the About Us tab, Leadership page.
        We provide a grid of key Paramount employees. As you hover on the image,
        the name smoothly glides to the top, revealing title and a view bio button.
        On the click of this button, a modal appears. This serves as an employee biography,
        with all relevant facts of the employee. It is important that Paramount's clients
        can identify them by face because it enhances familiarity and understanding.
      </p>


  </div>
  )
}

module.exports = Paramount;
