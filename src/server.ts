import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) =>{
    res.status(200).json({
        message: 'Welcome to the Champions API!'
    });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🔥 Server is running on port ${PORT}`);
});