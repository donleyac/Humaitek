var React = require('react');
var BoxData = require('./data');

var BoxService = {
  getData: function() {
    return BoxData.getData();
  },
  addData: function(elem) {
    BoxData.addData(elem);
  }
}

module.exports = BoxService;
