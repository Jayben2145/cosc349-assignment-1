const express = require('express');
const { sequelize, Blog } = require('./models');

const app = express();
const port = 3000;

// Set up Pug as the template engine
app.set('view engine', 'pug');
app.set('views', './views');

// Route to display blog posts
app.get('/', async (req, res) => {
    try {
        const blogs = await Blog.findAll({
            order: [['createdAt', 'ASC']] // Sort by newest first
        });
        res.render('index', { blogs });
    } catch (error) {
        console.error('Error fetching blogs:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
