const React = require('react');

const CommentForm = React.createClass({

  getInitialState: function() {
    return {author: '', text: ''};
  },

  handleAuthorChanged: function(e) {
    this.setState({author: e.target.value});
  },

  handleTextChanged: function(e) {
    this.setState({text: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    const author = this.state.author.trim();
    const text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  },

  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
            type="text"
            placeholder="Your name"
            value={this.state.author}
            onChange={this.handleAuthorChanged}
        />
        <input
            type="text"
            placeholder="Say something..."
            value={this.state.text}
            onChange={this.handleTextChanged}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
  
});

module.exports = CommentForm;
