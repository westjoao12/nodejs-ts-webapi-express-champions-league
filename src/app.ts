import express from 'express';
import routerPlayers from './routes/routesPlayers';
import routerClubs from './routes/routesClubs';
import cors from 'cors';

function createApp() {
    const app = express();

    app.use(express.json());
    app.use('/api', routerPlayers, routerClubs);

    const corsOptions = {
        origin: '*', // Allow all origins or specify a specific origin ['http://example.com', 'http://another-example.com']
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
        allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    };

    app.use(cors(corsOptions));


    return app;
}

export default createApp;