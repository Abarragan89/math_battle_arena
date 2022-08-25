import Head from 'next/head';
import Room from '../components/Room';
import { useSockets } from '../context/socket.context'
import { useRef } from 'react';

function SnakeLobby() {
    const { socket, username, setUsername } = useSockets();
    const usernameRef = useRef(null);

    function handleSetUserName() {
        const value = usernameRef.current.value;
        if (!value) {
            return;
        }
        setUsername(value)
        localStorage.setItem('username', value)
    }

    return (
        <>
            <Head>
                <title>Snake Game</title>
                <meta name="keywords" content="math games, classroom, educational, teacher, student" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {!username &&
                // This should be component modal
                <div>
                    <input type="text" placeholder='username' ref={usernameRef} />
                    <button onClick={handleSetUserName}>START</button>
                </div>
            }
            {username &&
                <div>
                    <Room />
                </div>}
        </>
    )
}

export default SnakeLobby;
