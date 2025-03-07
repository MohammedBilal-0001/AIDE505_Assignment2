const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    axios.get('http://flask:5000/Hello')
    .then(response => {
        res.send(response.data.message);
    })
    .catch(error => {
        res.send(error);
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});