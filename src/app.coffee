React    = require('react')
ReactDOM = require('react-dom')
injectTapEventPlugin = require('react-tap-event-plugin')

require('./pc.scss')

if process.env.NODE_ENV == 'production'
  console.log 'production mode'
else
  console.log 'development mode'

injectTapEventPlugin()

window.setTimeout(() ->
  content = document.getElementById("content")
  document.getElementById('content').classList.remove('init')
  CommentBox = require('./components/comment-box.jsx')
  MyToolbar = require('./components/my-toolbar.jsx')
  App = require('./components/app.jsx')
  ReactDOM.render(
    #React.createElement(CommentBox, null),
    #React.createElement(MyToolbar, null),
    React.createElement(App, null),
    document.getElementById('content')
  );
  #content.innerHTML = "test content"
, 100)
