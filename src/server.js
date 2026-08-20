import express from 'express';

const app = express();
const port = 5000;

// 1. Built-in Middleware
app.use(express.json());

// 2. Custom Logger Middleware (MUST BE BEFORE ROUTES)
const myLogger = function (req, res, next) {
    console.log(`[LOGGED] ${req.method} request to ${req.url}`);
    next();
};
app.use(myLogger);


// 3. Routes
app.get('/', (req, res) => {
    res.send('Welcome to my API');
});

app.get('/status', (req, res) => {
    res.json({ status: "Active", uptime: "100%" });
});

app.get('/user', (req, res) => {
    res.json({ message: "Please provide a username, like /user/John" });
});

app.get('/user/:name', (req, res) => {
    const userName = req.params.name;
    res.json({ message: `Hello ${userName}` });
});

app.post('/', (req, res) => {
    res.send('Got a POST request');
});

app.put('/', (req, res) => {
    res.send('Got a PUT request');
});

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user');
});


app.listen(port, () => {
    console.log(`Done, Server is running on http://localhost:${port}`);
});