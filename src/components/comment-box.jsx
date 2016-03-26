var React = require('react');
var ReactDom = require('react-dom');

// tutorial1.js
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

var Composit = React.createClass({
  render: function() {
    return (
      <div>
        <CommentBox />
        <CommentBox />
      </div>
    );
  }
});

module.exports = CommentBox;
//module.exports = Composit;
