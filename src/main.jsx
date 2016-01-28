var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="Ingredients" />, document.getElementById('ingredients') );
ReactDOM.render(<ListManager title="To Do" />, document.getElementById('todo') );
ReactDOM.render(<ListManager title="Christmas List" />, document.getElementById('christmas') );

// title is where you set ListManager unique name
// passing down a property --> this.props , immutable (should never change it)