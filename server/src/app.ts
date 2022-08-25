import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import logger from './utils/logger'
import { version } from '../package.json'

import socket from './socket';
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = process.env.PORT || 3001;
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true,
    }
});

app.get('/', (_, res) => res.send(`Server is up and running on ${version}`));

httpServer.listen(PORT,  () => {
    logger.info(`🚀 Server is listening and running on verision ${version} 🚀`);
    socket({ io })
});