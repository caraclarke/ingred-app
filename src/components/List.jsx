var React = require('react');
var ListItem = require('./ListItem.jsx');
// remember need ./ for files we create within our project
// don't need for node modules

// creating List class
var List = React.createClass({

  render: function() {

    var createItem = function(text, index) {
      return <ListItem key={index + text} text={text} />;
    };

    return (<ul>{this.props.items.map(createItem)}</ul>);
  }
});

module.exports = List;

// react expects you to have unique identifiers
// make list items unique

// without unique identifiers, lists can show the wrong data
// createItem takes text input and index
// pass down to list item, unique key and property text
// key= and text= are properties, this.props comes from them
// this. comes from component thats above it
// in react things trickle down, no two-way data binding
// one way from top down
// can add as many properties as you want

// .map(createItem) calling function creted above it
// map iterating through array, calling createItem function we passed into it
// map calls whatever function you pass into it