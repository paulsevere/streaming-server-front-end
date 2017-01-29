import {
    createStore,
    combineReducers,
    applyMiddleware,
} from 'redux';
import {
    composeWithDevTools
} from 'redux-devtools-extension';
import {
    socketMiddleware,
    socketActionDispatcher,
    handleRouteChange
} from './socket-middleware'
import {
    routerReducer
} from 'react-router-redux'

import io from 'socket.io-client';

// let socket = io.connect('https://socket-server-pihddtuthr.now.sh');
let socket = io.connect('http://localhost:8080');



function room_id(state = null, action) {
    switch (action.type) {
        case 'NEW_ROOM':
            return action.room_id
        default:
            return state
    }
}

function updates(state = [], action) {
    switch (action.type) {
        case 'NEW_UPDATE':
            return action.update.concat(state)
        default:
            return state
    }
}
// let middleWare = compose(socketMiddleware(socket), handleRouteChange(socket));

let reducer = combineReducers({
    updates,
    room_id,
    routing: routerReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(socketMiddleware(socket), handleRouteChange(socket))));
socketActionDispatcher(socket, store);
window.store = store;
export default store;
