//requirements for the server file
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
//const mailer = require('./routes/api/mailer');

//allows environment variables
require('dotenv').config();

//creates express server and defines port
const app = express();
const port = process.env.port || 5000;

//cors middleware
app.use(cors());

//cors middleware that allows us to parse json
app.use(express.json());

//database uri - get from mongodb dashboard
const uri = process.env.ATLAS_URI;

//could do above or const uri = "mongodb+srv://jameshuntt:bLT2ymh%21@golf-hqfhp.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

//starts connection to mongodb
const connection = mongoose.connection;

//opens connection and logs once it is open
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//require our routes
const usersRouter = require('./routes/api/users');

//use the routes
app.use('/users', usersRouter);


//starts server on our specified port
app.listen(port, () => {
    console.log('Server is running on port: ' + port);
})
