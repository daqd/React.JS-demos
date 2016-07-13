var ComponentDiv = require('./ComponentDiv');
//引入less文件
require('./ComponentStyle.less');

var Demo = React.createClass({
	render:function(){
  	return(
  		<ComponentDiv />
    )
  }
})

React.render(<Demo />,document.body);

