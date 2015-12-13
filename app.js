"use strict";

var defaultState = {
    greeting: "Hello World!"
};
function reducerFunction() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? defaultState : arguments[0];
    var action = arguments[1];

    return state;
}

var store = Redux.createStore(reducerFunction);

var App = React.createClass({
    displayName: "App",

    render: function render() {
        return React.createElement(
            "h1",
            null,
            this.props.greeting
        );
    }
});

App = ReactRedux.connect(function (state) {
    return state;
})(App);

ReactDOM.render(React.createElement(
    ReactRedux.Provider,
    { store: store },
    React.createElement(App, null)
), document.getElementById('app'));
