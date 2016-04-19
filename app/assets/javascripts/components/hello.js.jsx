const React = require('react');

const Hello = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  }, 
  
  render: function() {
    const msg = `Hello, ${this.props.name}`;
    return (
      <div>{msg}</div>
    );
  }
});

module.exports = Hello;
