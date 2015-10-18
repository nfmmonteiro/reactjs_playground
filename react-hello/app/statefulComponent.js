function exampleWithTextAreaCounter() {

	var TextAreaCounter = React.createClass({
		propTypes: {
			initialValue: React.PropTypes.string
		},
		getInitialState: function() {
			return {
				text: (this.props.initialValue || '')
			};
		},
		_textChanged: function(event) {
			this.setState({
				text: event.target.value
			});
		},
		render: function() {
			return React.DOM.div(null, 
				React.DOM.textarea({
					value: this.state.text,
					onChange: this._textChanged
				}),
				React.DOM.div(null,
					"Text length: ",
					React.DOM.strong(null, this.state.text.length),
					" characters."
				)
			);
		}
	});

	window.textAreaCounter = ReactDOM.render(
		React.createElement(TextAreaCounter, {initialValue: "Nuno"}),
		appPlaceholder);


}