import React     from 'react';
import MyToolbar from './my-toolbar';

var App = React.createClass({
  getInitialState: function(){
    var rows = []
    let count = 0;
    for(; count < 100; count++){
      rows.push(count);
    }
    return {
      rows: rows,
      count: count
    };
  },
  addRows: function(num) {
    console.log('addRows(): this', this, num);
    var rows = []
    var count = this.state.count;
    for(; count < this.state.count+num; count++){
      rows.push(count);
    }
    this.setState({
      rows:  this.state.rows.concat(rows),
      count: count
    });
  },
  render: function() {
    console.log(this.state)
    var items = [];
    for (var i=0; i < this.state.rows.length; i++){
      items.push(
        <li key={i}>{this.state.rows[i]}</li>
      );
    }
    return (
      <div className="app">
        <MyToolbar onAddRows={this.addRows} />
        <div className="flex-container">
          <div className="flex-pane">
            <ul>
              {items}
            </ul>
          </div>
          <div className="flex-pane">
          b
          </div>
        </div>
      </div>
    );
  }
});


module.exports = App;
