import Head from 'next/head';
import { useSockets } from '../context/socket.context'

function SnakeLobby() {
    const { socket } = useSockets();

    return (
        <>
            <Head>
                <title>Snake Game</title>
                <meta name="keywords" content="math games, classroom, educational, teacher, student" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>{socket.id}</div>
        </>
    )
}

export default SnakeLobby;
