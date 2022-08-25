import { useSockets } from '../context/socket.context';
import { useRef } from 'react';
import EVENTS from '../config/events';

function Room () {
    const { socket, roomId, rooms} = useSockets();
    const newRoomRef = useRef(null);

    function handleCreateRoom() {
        // get the room name
        const roomName = newRoomRef.current.value || '';
        if(!String(roomName).trim()) return; 
        // emit room created
        socket.emit(EVENTS.CLIENT.CREATE_ROOM, {roomName})
        // set room name input to empty string
        newRoomRef.current.value = '';
    }
    console.log(Object.keys(rooms))
    return (
        <nav>
            <div>
                <input ref={newRoomRef} type="text" placeholder='Room name'/>
                <button onClick={handleCreateRoom}>CREATE ROOM</button>
            </div>
            {Object.keys(rooms).map((key) => {
                return <div key={key}>{rooms[key].name}</div>;
            })}
        </nav>
    )
}
export default Room