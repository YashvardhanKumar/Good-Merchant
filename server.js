const express = require('express');
const path = require('path');
const axios = require('axios');
// Loads env variables
require('dotenv').config()
var cors = require('cors')

const app = express();
app.use(cors())
const PORT = process.env.PORT || 3001;
// Adds json parsing middleware
app.use(express.json());
// Setup static directory to serve
app.use(express.static(path.resolve('build')));
app.use(express.static(path.join(__dirname, "build")));
// Creates weather endpoint
app.get('*', (req, res) => {
    res.sendFile(path.resolve('build', 'index.html'));
});
// console.log that your server is up and running
app.listen(PORT || 3001, () => console.log(`Listening on port ${PORT}`));
