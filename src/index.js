const { request, response } = require('express');
const express = require ('express');

const app = express();

app.get('/projects', (request, response) => {
    return response.json({
        message: 'Hello World!'
    })
});

app.listen(9125, () => {
    console.log('Backend starte! 8-)')

});