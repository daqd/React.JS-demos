"use strict";

var ComponentDiv = React.createClass({
	displayName: "ComponentDiv",

	render: function render() {
		return React.createElement(
			"div",
			{ "class": "ComponentDiv" },
			"ComponentDiv"
		);
	}
});

module.exports = ComponentDiv;