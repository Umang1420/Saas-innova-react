import express from 'express';

const app = express();
const port = 5000;

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome to my API');
});


app.get('/status', (req, res) => {
    res.json({ status: "Active", uptime: "100%" });
});


app.get('/user/:name', (req, res) => {
    const userName = req.params.name;
    res.json({ message: `Hello ${userName}` });
});

app.listen(port, () => {
    console.log(`Done, Server is running on http://localhost:${port}`);
});