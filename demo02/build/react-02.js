'use strict';

var ComponentDiv = require('./ComponentDiv');
//引入less文件
require('./ComponentStyle.less');

var Demo = React.createClass({
  displayName: 'Demo',

  render: function render() {
    return React.createElement(ComponentDiv, null);
  }
});

React.render(React.createElement(Demo, null), document.body);