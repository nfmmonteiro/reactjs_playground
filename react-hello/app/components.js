function helloWorld() {
	ReactDOM.render(
		React.DOM.h1(null, "Hello World!"),
		appPlaceholder
	);
}

function nestedReactComponents() {
	ReactDOM.render(
		React.DOM.div({style: {width: "100%", margin: "1em"}}, 
			React.DOM.h1({id: "title"}, React.DOM.strong(null, "Hello World!")), 
			React.DOM.p({className: "paragraph"}, "This is just a paragraph...")),
		appPlaceholder
	);
}