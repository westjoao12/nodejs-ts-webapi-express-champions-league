import express from 'express';
import routerPlayers from './routes/routesPlayers';

function createApp() {
    const app = express();

    app.use(express.json());
    app.use('/api', routerPlayers);


    return app;
}

export default createApp;