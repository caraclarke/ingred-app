var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
  // takes user input

  // property of an object called getinitialstate, a function that is a property
  // every component will call getinitialstate when the component first loads, only ever called once
  getInitialState: function() {
    return { items: [], newItemText: '' };
  },
  onChange: function(e) {
    this.setState({newItemText: e.target.value});
    // grabbing element, changing newItemText
    // whenever user does keystroke, passes in element and changes state to be e.target.value
    // updates value box, tied to data source
  },
  // function we created that is called when button is pressed to submit new data
  handleSubmit: function(e) {
    e.preventDefault();
    // not using click function of button itself, don't want click to be accidently called thats why preventDefault

    var currentItems = this.state.items;
    // components have properties and states
    // this.props is only ever read only
    // this.state is when you have data that can change (immutable data)
    // never mutate properties

    currentItems.push(this.state.newItemText);

    this.setState({items: currentItems, newItemText:''});
    // setState -- property of a function in react -- will be called whenever you want to change the state of your application
    // takes an object with properties
    // whatever you pass in will be properties of your state
  },
  render: function() {
    // comments at bottom of file
    return (
      <div>
        <h3>{this.props.title}</h3>

        <form onSubmit={this.handleSubmit}>

          <input onChange={this.onChange} value={this.state.newItemText}></input>

          <button>Add</button>
        </form>

        <List items={this.state.items} />
      </div>
    );
  }
});

module.exports = ListManager;

// dynamic, reusable because props.title not ex:'Christmas To Do'
// form knows this means to grab function not render function
// input onChange called everytime keystroke put in input box
// when user types we want it to show up in input box
// with React you need to explicity reflect the changes you want to show up on the element
// this.state.newItemText is directly referencing value we are going to be saving and storing
// without onChange typing won't show up in the box
// <List /> re-rendered everytime you add an item