const express = require('express');
require('dotenv').config();
const heroRoutes = require('./routes/heroRoutes');

//Running express server
const app = express();
const port = process.env.PORT || 8000;


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});