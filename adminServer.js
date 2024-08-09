const express = require('express');
const bodyParser = require('body-parser');
const { sequelize, Blog } = require('./models');

const app = express();
const port = 3000; // Different port from your main server

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Set up Pug as the template engine
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('newBlog');
});

// Route to display the form
app.get('/new-blog', (req, res) => {
    res.render('newBlog');
});

// Route to handle form submission
app.post('/new-blog', async (req, res) => {
    const { title, content } = req.body;

    try {
        await Blog.create({ title, content });
        res.redirect('/');
    } catch (error) {
        console.error('Error creating blog:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Admin server is running on http://localhost:${port}`);
});
