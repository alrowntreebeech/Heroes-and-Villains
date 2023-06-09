const express = require('express');
const bodyParser = require('body-parser'); 

const app = express();
const port = 3000; //Add to .env file

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/', (request, response) => {
    response.json({ info: 'Hello World' })
});

app.listen(port, () => {
    console.log(`App running on port ${port}`)
});