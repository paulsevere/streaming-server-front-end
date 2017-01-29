import io from 'socket.io-client'
import store from '../store/store'

let defaultHost = 'https://socket-server-pihddtuthr.now.sh/'

export default function(host = defaultHost) {
    const socket = io.connect(host);
    socket.on('*', msg => {
        // console.log(msg)
        store.dispatch({ type: 'NEW_UPDATE', update: msg })
    })

    return socket;
}
