var React = require('react');

var ListItem = React.createClass({
  // when you createClass has an object takes as its first parameter
  // object has render property
  // render takes your jsx and thats what shows on your screen
  render: function() {
    // returning actual jsx that you want to use
    // html with js mixed into it
    return (
      <li>
        <h4>{this.props.text}</h4>
      </li>
    );
  }

});

module.exports = ListItem;
// export so we can re-use

// return does not "require" the parentheses, helps it be more readable
// li h4 /h4 /li could also all be inline, indented to be readable
// js part must be inside curly braces

// this (components).props (object for properties). text(name of key)
// grab property text from this specific object
// assuming there will be properties and one of the properties will be text