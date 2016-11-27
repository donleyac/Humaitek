var React = require('react');
var Box = require('../../components/box/index');

var BoxData =  {
  data: [
  (<Box  height={2} width={1} date={"11/25"} category={"important"}>
    <p><span className="text-emph">Humaitek</span> is a design and innovation
      consulting studio. We design <span className="text-emph">websites</span>
      , <span className="text-emph">books</span>
      , <span className="text-emph">posters</span>
      , <span className="text-emph">films</span>
      , <span className="text-emph">products</span>
      ,<span className="text-emph"> architecture</span>
      , and <span className="text-emph">interiors</span>
      . We exist in the <span className="text-emph">nation's capital </span>
    but extend our philosophy to the world.</p></Box>),
  (<Box height={1} width={1} date={"11/25"} category={"important"}>
    <div className="contact-box col-sm-6 grid">
      <p id="contact"><span id="contact-text">Contact</span></p>
      <form id="contact-form" className="hidden" action="" method="post">
        <fieldset>
          <input placeholder="Name" type="text" tabIndex="1" required autoFocus />
        </fieldset>
        <fieldset>
          <input placeholder="Email Address" type="email" tabIndex="2" required />
        </fieldset>
        <fieldset>
          <input placeholder="Phone Number" type="tel" tabIndex="3" required />
        </fieldset>
        <fieldset>
          <textarea placeholder="Type your Message Here...." tabIndex="4" required></textarea>
        </fieldset>
        <fieldset>
          <button className="flat-butt" name="submit" type="submit" id="contact-submit" tabIndex="5" data-submit="...Sending">Submit</button>
        </fieldset>
      </form>
    </div>
  </Box>),
  (<Box height={1} width={1} date={"11/25"} category={"normal"}><img className="img-responsive" src="http://placehold.it/300x250" /></Box>),
  (<Box height={1} width={1} date={"11/25"} category={"normal"}><img className="img-responsive" src="http://placehold.it/300x250" /></Box>),
  (<Box height={1} width={1} date={"11/25"} category={"normal"}><img className="img-responsive" src="http://placehold.it/300x250" /></Box>)
],
getData: function() {
  return this.data;
},
addData:function(elem){
  this.data.push(elem);
}
};
module.exports = BoxData;
