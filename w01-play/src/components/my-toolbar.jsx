var React = require('react');
import IconMenu from 'material-ui/lib/menus/icon-menu';
import IconButton from 'material-ui/lib/icon-button';
import FontIcon from 'material-ui/lib/font-icon';
import NavigationExpandMoreIcon from 'material-ui/lib/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/lib/menus/menu-item';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import RaisedButton from 'material-ui/lib/raised-button';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';

// tutorial1.js
var MyToolbar = React.createClass({
  propTypes: {
    onAddRows: React.PropTypes.func
  },
  _onAdd100: function(){ this.props.onAddRows(100); return; },
  _onAdd1000: function(){ this.props.onAddRows(1000); },
  _onAdd2000: function(){ this.props.onAddRows(2000); },
  render: function() {
    var barstyle = {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0
    };
    barstyle={};
    return (
      <Toolbar style={barstyle}>
      <ToolbarGroup firstChild={true} float="left">
        <DropDownMenu value={3}>
          <MenuItem value={1} primaryText="All Broadcasts" />
          <MenuItem value={2} primaryText="All Voice" />
          <MenuItem value={3} primaryText="All Text" />
          <MenuItem value={4} primaryText="Complete Voice" />
          <MenuItem value={5} primaryText="Complete Text" />
          <MenuItem value={6} primaryText="Active Voice" />
          <MenuItem value={7} primaryText="Active Text" />
        </DropDownMenu>
      </ToolbarGroup>
      <ToolbarGroup float="right">
        <RaisedButton label="Add100" onMouseDown={this._onAdd100} primary={true} />
        <RaisedButton label="Add1000" onMouseDown={this._onAdd1000} primary={true} />
        <RaisedButton label="Add2000" onMouseDown={this._onAdd2000} primary={true} />
        <ToolbarSeparator />
        <RaisedButton label="Create Broadcast" primary={true} />
      </ToolbarGroup>
      </Toolbar>
    );
  }
});


module.exports = MyToolbar;
