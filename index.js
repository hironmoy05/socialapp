const express = require('express');
const fs = require('fs');
const format = require('date-format');

// Swagger doc related
const swaggerUi = require('swagger-ui-express');
const YAML = require('yaml');
const file = fs.readFileSync('./swagger.yaml', 'utf-8');
const swaggerDocument = YAML.parse(file);

const app = express();

const PORT = process.env.PORT || 4000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
    res.status(200).send('Hello world');
});

app.get('/api/v1/friends', (req, res) => {
    res.status(200).json({
        id: 0,
        name: 'Hironmoy Dhar',
    })
})

app.get('/api/v1/instagram', (req, res) => {
    const instaSocial = {
        username: 'HironmoydharOfficial',
        followers: 66,
        follows: 70,
        date: format.asString('dd[MM] - hh:mm:ss', new Date()),
    };

    res.status(200).json(instaSocial);
});

app.get('/api/v1/facebook', (req, res) => {
    const faceSocial = {
        username: 'HironmoydharPage',
        followers: 88,
        follows: 10,
        date: format.asString('dd[MM] - hh:mm:ss', new Date()),
    };

    res.status(200).json(faceSocial);
});

app.get('/api/v1/linkedin', (req, res) => {
    const linkedSocial = {
        username: 'hironmoydhar',
        followers: 80008,
        follows: 20,
        date: format.asString('dd[MM] - hh:mm:ss', new Date()),
    };

    res.status(200).json(linkedSocial);
});

app.get('/api/v1/:token', (req, res) => {
    const param = req.params.token;
    res.status(200).json({ param })
})

app.listen(PORT, () => {
    console.log(`Running at port ${PORT}...`)
})