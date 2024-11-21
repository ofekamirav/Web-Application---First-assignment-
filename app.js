const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Posts = require('./models/posts_model');
const Comments = require('./models/comment_model');

// Setup Body-parser to analyze URL
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION)
.then(() => console.log('Connected to Database'))
.catch((error) => {
    console.error('Error when trying to connect to the database:', error);
    process.exit(1);
});

const db = mongoose.connection;
db.on('error', (error) => console.error('Connection error:', error));


/*Posts.create({
    title: 'First Post',
    content: 'This is my first post',
    owner: 'John Doe'
})
.then((post) => {
    console.log('Post created:', post);
})
    
Comments.create({
    post_id: '5f7f0a4c6c3b7a0f3c6e1a0b',
    content: 'This is my first comment',
    owner: 'John Doe'
}).then((comment) => {
    console.log('Comment created:', comment);
});
*/


// Server Connection
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// import Routes