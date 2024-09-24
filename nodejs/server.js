const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');

const app = express();
const port = 8080;

// Configure Nunjucks
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

// Set Nunjucks as the template engine
app.set('view engine', 'njk');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (req, res) => {
    res.render('index', { title: 'Hello World', targetURL: req.url });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});