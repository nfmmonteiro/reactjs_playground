function propTypes() {

	var Component = React.createClass({
		propTypes: {
			id: React.PropTypes.string.isRequired,
			orders: React.PropTypes.number.isRequired
		},
		render: function() {
			return React.DOM.span(
					{id: this.props.id}, 
					("Number of orders:  " + this.props.orders + "!"));
		}
	});

	ReactDOM.render(
		React.createElement(Component, {id: 'id', orders: 2}),
		appPlaceholder
	);
}