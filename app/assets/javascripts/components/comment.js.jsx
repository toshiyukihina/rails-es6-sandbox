const React = require('react');
const marked = require('marked');

const Comment = React.createClass({

  rawMarkup: function() {
    const html = marked(this.props.children.toString(), {sanitize: true});
    return { __html: html }
  },
  
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
  
});

module.exports = Comment;

