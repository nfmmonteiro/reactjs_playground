var React = require('react');

var HelloWorld = React.createClass({
	displayName: 'HelloWorld',
  	render: function() {
    	return (
    		<h1 className="hello">Hello World!!!</h1>
    	);
  	}
});

module.exports = HelloWorld;