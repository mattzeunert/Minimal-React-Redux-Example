var defaultState = {
    greeting: "Hello World!"
}
function reducerFunction(state=defaultState, action){
    return state;
}

var store = Redux.createStore(reducerFunction);

var App = React.createClass({
    render: function(){
        return <h1>
            {this.props.greeting}
        </h1>
    }
});

App = ReactRedux.connect(function(state){
    return state;
})(App);

ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <App />
    </ReactRedux.Provider>,
    document.getElementById('app')
);