var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(
  <ListManager title="Ingredients" />,
  document.getElementById('ingredients')
);

// title is where you set ListManager unique name
// passing down a property --> this.props , immutable (should never change it)