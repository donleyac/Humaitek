var React = require('react');
require('./styles.scss');


var SarantisProperties = function(props) {
  return (
    <div className="article">

      <div className="overview">
        <div className="involvement">
          Involvement:
          <span>Design - Minor</span>
          <span>Development - Full</span>
          <a className="website-url" href="http://sarantisproperties.com/">View Client Website</a>
        </div>

      </div>
      <p>
        Sarantis Properties is a property management company that invests in
        residential and commercial developments in the DMV area. The most important
        content that we should display is the properties, which take center stage
        in our design as an autoscrolling carousel. The flow of images is
        intentional. The images in close succession follow the path of a particular property,
        from outside to inside. In addition, if you view the carousel within a page
        categorized as residential or commercial the specific images are curated accordingly.
        We wanted the most important visuals obvious and relevant. The carousel
        maintains a buffer at the bottom to compensate for the varying image sizes
        as to prevent the contents lower in the page from moving.
      </p>
      <img src={require('./assets/sarantis/carousel.png')}/>
      <p>
        Most of the pages in the residential and commercials tabs follow a basic template for consistency.
        Property image on the left with address and specific information on the right.
        The right pane may also contain external links to a listing so that the user
        can view the images specific to that property tied to a floorplan.
      </p>
      <img src={require('./assets/sarantis/commercial.png')}/>
      <p>
        There are some one off pages like remodel and general contracting which
        has less purposeful visuals available. Therefore the images provided mearly
        function to break up the required text descriptions.
      </p>
      <p>
        For now the website is living, updated when new information on certain properties
        are revealed. The layout may change as new media becomes available or
        as the site attempts to capture a different aspect of it's clientele.
      </p>


  </div>
  )
}

module.exports = SarantisProperties;
