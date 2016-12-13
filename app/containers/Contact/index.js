var React = require('react');
require('./styles.scss');

var Contact = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return {
        name: "",
        number:"",
        message: ""
      }
  },
  handleChange(field, e) {
    var nextState = {};
    nextState[field] = e.target.value;
    this.setState(nextState);
  },
  handleSubmit() {
    var placeholder = 'mailto:';
    var receipient = 'adonley@thechristoscompanies.com?';
    var subject = 'subject=Sarantis%20Properties' + '%20-%20' + String(this.state.name) + '&';
    var body = 'body=' + String(this.state.number) +'%0D%0A%0D%0A'+ String(this.state.message) +'%0D%0A%0D%0A';
    var link = placeholder + receipient + subject + body;
    window.open(link);
  },
  render(){
    return(
    <div className="contact">
      <div className="col-sm-offset-2 col-sm-4">
      <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
        <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                onChange={this.handleChange.bind(this,"name")}
                />
              <input
                type="text"
                placeholder="Phone Number"
                className="form-control"
                onChange={this.handleChange.bind(this,"number")}
                />
              <textarea
                type="text"
                placeholder="Message"
                className="form-control"
                onChange={this.handleChange.bind(this,"message")}
              />
        </div>
        <div className="form-group">
          <button
            className="btn btn-block btn-success"
            type="submit"> Submit
          </button>
        </div>
      </form>
    </div>
    <div className="col-sm-5 col-sm-offset-right-1">
      <ul>
        <li>Paramount Construction Services</li>
        <li>21441 Pacific Blvd., Suite 230
            Sterling, VA 20166
        </li>
        <li>(703) 964-3230 (Office)</li>
        <li>(866) 585-0992 (Toll Free)</li>
        <li>info@paramountserv.com</li>
      </ul>
    </div>
  </div>
    )
  }
});

module.exports = Contact;
