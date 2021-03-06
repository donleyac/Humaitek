import React from 'react';
import DocumentMeta from 'react-document-meta';
import './styles.scss';

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
    var receipient = 'donleyac@gmail.com?';
    var subject = 'subject=Humaitek%20Website' + '%20-%20' + String(this.state.name) + '&';
    var body = 'body=' + String(this.state.number) +'%0D%0A%0D%0A'+ String(this.state.message) +'%0D%0A%0D%0A';
    var link = placeholder + receipient + subject + body;
    window.open(link);
  },
  render(){
    const meta = {
      title: 'Contact - Humaitek',
      description: 'Contact Humaitek for all your web design/development needs.',
      canonical:'http://humaitek.com/#/contact',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'web, development, design, react, studio, dmv, dc, javascript, html, css'
        }
      }
    };
    return(
    <div className="contact">
      <DocumentMeta {...meta} />
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
              className="btn btn-block emph-background"
              type="submit"> Submit
            </button>
          </div>
        </form>
      </div>
      <div className="col-sm-5 col-sm-offset-right-1">
        <ul>
          <li>Feel free to contact</li>
          <li>(571) 839-6592</li>
          <li>donleyac@gmail.com</li>
        </ul>
      </div>
    </div>
    )
  }
});

module.exports = Contact;
