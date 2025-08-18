import express from 'express';

function createApp() {
    const app = express();

    app.use(express.json());

    app.get('/', (req, res) =>{
        res.status(200).json({
            message: 'Welcome to the Champions API!'
        });
    })
    
    return app;
}

export default createApp;