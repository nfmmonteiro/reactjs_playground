function customComponent1() {

	var Salut = React.createClass({
		render: function() {
			var text = "Hello " + this.props.name + "!";
			return React.DOM.span(null, text);
		}
	});

	var salut = React.createElement(Salut, {name: "Nuno Monteiro"});
	
	ReactDOM.render(
		salut,
		appPlaceholder
	);
}

function customComponent2() {

	var CustomComponent = React.createClass({
		render: function() {
			var properties = {style: {fontFamily: 'Verdana'}};
			return React.DOM.span(properties, 'I am so custom!');
		}
	});

	ReactDOM.render(
		React.createElement(CustomComponent),
		appPlaceholder
	);
}

function customComponentUsingFactory() {
	
	var Component = React.createClass({
		render: function() {
			return React.DOM.span(
				{id: this.props.id}, 
				"Hello " + this.props.name + '!'
			);
		}
	});

	var ComponentFactory = React.createFactory(Component);

	ReactDOM.render(
		ComponentFactory({id: 'salut', name: 'Nuno Monteiro'}),
		appPlaceholder
	);
}

function notUsingReactDotDOM() {
	var component = React.createElement('h1', {id: 'id'}, 'Hello World!');
	ReactDOM.render(component, appPlaceholder);
}
