//创建一个元素节点
var Demo = React.createClass({
	render:function(){
  var demoClassName = 'demoStyle';
  	return(
    	<div classNames={demoClassName}> Hello React! </div>
    )
  }
})
React.render(<Demo />,document.body);

//初始化组件状态机变量
var navConfig = [];
var NavBar = React.createClass({
	getInitialState:function(){
  	return{
    	openDropDown:-1
    }
  },
	render:function(){
  console.log(this.state.openDropDown);
  	return(
    	<div className="DemoClassName">demo demo demo</div>
    )
  }
})
React.render(<NavBar config={navConfig} />,document.body);

//组件加载完之后执行的方法 
var navConfig = [];
var NavBar = React.createClass({
	getInitialState:function(){
  	return{
    	openDropDown:-1
    }
  },
  componentWillMount:function(){
  	console.log("组件加载之前调用");
  },
  componentDidMount:function(){
  	var nodes = this.getDOMNode;
    alert(nodes);
  },
	render:function(){
  console.log(this.state.openDropDown);
  	return(
    	<div className="DemoClassName">demo demo demo</div>
    )
  }
})
React.render(<NavBar config={navConfig} />,document.body);

//设置默认属性及默认属性参数限制
var navConfig = ['abc'];
var NavBar = React.createClass({
	getInitialState:function(){
  	return{
    	openDropDown:-1
    }
  },
  getDefaultProps:function(){
  	return{
    	config:['124']
    }
  },
  componentWillMount:function(){
  	console.log("组件加载之前调用");
  },
  componentDidMount:function(){
  	var nodes = this.getDOMNode;
    //console.log(nodes);
      console.log(document.getElementById('EleId').innerHTML);
  },
	render:function(){
  console.log(this.state.openDropDown);
  console.log(this.props.config);
  	return(
    	<div id="EleId"  className="DemoClassName">demo demo demo</div>
    )
  }
})
React.render(<NavBar />,document.body);

//mixins用法
//公共mixin
var mixinsDemo = {
	componentWillMount:function(){
  	console.log("公共组件初始化之前调用");
  },
  componentDidMount:function(){
  	console.log("公共组件初始化完毕之后调用");
  }
};
var ExampleComponent = React.createClass({
	mixins:[mixinsDemo],
	render:function(){
  	return(
    	React.createElement('div',{className:'demoClass'},'ReactEle')
    )
  }
});
var ExampleComponent2 = React.createClass({
	mixins:[mixinsDemo],
  render:function(){
  	return(<div className="demoClass2">ReactEle2</div>)
  }
});
React.render(<ExampleComponent />,document.body);
React.render(<ExampleComponent2 />,document.body);

//遍历循环输出
var configObj = [
{
	website:'百度',
  Href:'www.baidu.com'
},
{
	website:'新浪',
  Href:'www.sina.com'
}
];
var ComponentDemo = React.createClass({
	render:function(){
  var config = this.props.config;
	var getObj = config.map(function(item){
  	return(
    	<li className="navlist_Name">
      	<a className="navlist_Href" href={item.Href}>
        	{item.website}
        </a>
      </li>
    )
  });
  	return(<div className="Wrap">{getObj}</div>)
  }
})

React.render(<ComponentDemo config={configObj} />,document.body);

//简单的添加交互事件
var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
  	console.log(event);
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <p onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </p>
    );
  }
});

React.render(
  <LikeButton />,
  document.body
);

//组件循环嵌套
var Avatar = React.createClass({
  render: function() {
      <div>
        <ProfilePic username={this.props.username} />
        <ProfileLink username={this.props.username} />
      </div>
    );
  }
});

var ProfilePic = React.createClass({
  render: function() {
    return (
      <img src={'http://graph.facebook.com/' + this.props.username + '/picture'} />
    );
  }
});

var ProfileLink = React.createClass({
  render: function() {
    return (
      <a href={'http://www.facebook.com/' + this.props.username}>
        {this.props.username}
      </a>
    );
  }
});

React.render(
  <Avatar username="mimengyu" />,
  document.body
);

//

