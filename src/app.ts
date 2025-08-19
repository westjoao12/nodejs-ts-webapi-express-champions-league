import express from 'express';
import routerPlayers from './routes/routesPlayers';
import routerClubs from './routes/routesClubs';

function createApp() {
    const app = express();

    app.use(express.json());
    app.use('/api', routerPlayers, routerClubs);


    return app;
}

export default createApp;