import io, { Socket } from 'socket.io-client';
import { SOCKET_URL } from '../config/default';
import { createContext, useContext, useState } from 'react';
import EVENTS from '../config/events';

interface Context {
    socket: Socket;
    username?: string;
    setUsername: Function;
    roomId?: string;
    rooms: object
}

const socket = io(SOCKET_URL);

const SocketContext = createContext<Context>({
    socket, 
    setUsername: () => false,
    rooms: {},

});

function SocketsProvider(props: any) {
    const [username, setUsername] = useState('')
    const [roomId, setRoomId] = useState('')
    const [rooms, setRooms] = useState({})

    socket.on(EVENTS.SERVER.ROOMS, (value) => {
        setRooms(value)
    })

    socket.on(EVENTS.SERVER.JOINED_ROOM, (value) => {
        setRoomId(value)
    })

    return (
        <SocketContext.Provider 
        value={{socket, username, setUsername, rooms, roomId}}
        {...props} />
    )
}

// we are going to save all state in this useSockets
export const useSockets = () => useContext(SocketContext)

export default SocketsProvider;