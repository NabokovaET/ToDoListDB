// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const todo = require('./routes/todo.route'); // Imports routes for the todos
// initialize our express app
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://Helga:ETHelga7@cluster0.ci6hu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/items', todo);


let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});