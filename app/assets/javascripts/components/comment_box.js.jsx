const React = require('react');
const CommentList = require('./comment_list');
const CommentForm = require('./comment_form');

const CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
});

module.exports = CommentBox;
