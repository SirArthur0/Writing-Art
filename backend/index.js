const express = require('express');

const bodyParser = require('body-parser');

const writingArtRouter = require('./routes/writingArtRoute');

const errorController = require('./controllers/error')

const app = express();

const ports = process.env.PORT || 3000;

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // " , POST, PUT, DELETE' " was deleted after the GET below, if necessary insert it back
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    //res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/writingart', writingArtRouter)

app.use(errorController.get404);

app.use(errorController.get500);

app.listen(ports, () => console.log(`listening on port ${ports}`));