export const socketMiddleware = socket => () => next => action => {
    window.socket = socket;
    if (testProps(action, 'meta.socket.channel')) {
        socket.emit(action.meta.socket.channel, {
            action,
            room_id: action.meta.socket.room_id
        })
    }
    return next(action)
}

export const handleRouteChange = socket => () => next => action => {
    if (action.type.indexOf('@@router') > -1) {
        socket.emit('NEW_ROOM', {
            room_id: action.payload.pathname.slice(1)
        })
    }

    return next(action);
}

function testProps(obj, pathStr) {
    let lvls = pathStr.split('.');
    return lvls.reduce((prev, seg) => {
        if (prev && prev[seg]) {
            return prev[seg]
        } else {
            return null
        }
    }, obj)
}

export function socketActionDispatcher(socket, store) {
    socket.on('*', action => {
        action.meta = null;
        store.dispatch(action);
    })
}

// console.log(te.first.bad.third)

// console.log(testProps(te, 'first.bad.third'))
