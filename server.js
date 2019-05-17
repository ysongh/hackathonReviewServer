const express = require('express');
const mongoose = require('mongoose');

const db = require('./config/keys').mongoURI;

const app = express();

app.get('/', (req, res) => res.send('Hackathon Review'));

const port = process.env.PORT || 8080;

mongoose.connect(db, { useNewUrlParser: true })
    .then(result => {
        app.listen(port, () => console.log('Database Connected'));
    })
    .catch(err => {
        console.log(err);
    });