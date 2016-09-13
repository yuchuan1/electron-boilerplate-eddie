import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import JSONTree from 'react-json-tree';
import {Map} from 'immutable';
import { Button } from 'react-bootstrap';
//https://react-bootstrap.github.io/components.html

let initialState = {};
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SOME_ACTION':
            state.value = action.value
            return state
        default:
            return state
    }
}

let store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));
store.dispatch({type: 'SOME_ACTION', value: 'Hey, What\'s up?'});

const json = {
    array: [
        1, 2, 3
    ],
    bool: true,
    object: {
        foo: 'bar'
    },
    immutable: Map({key: 'value'})
}

var HelloMessage = React.createClass({
    getInitialState: function() {
        let state = store.getState();
        return state;
    },
    render: function() {
        return <div>{this.state.value} {this.props.name}
            <p/>
            Having fun with React and Redux?
            <Button bsStyle="primary" bsSize="large" block>Block level button</Button>
            <Button bsSize="large" block>Block level button</Button>
            <JSONTree data={json}/>
            </div>;
          }
});

ReactDOM.render(
    <HelloMessage name="Eddie"/>, document.getElementById('main'));
