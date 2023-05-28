require('dotenv').config();
const PORT = 5000 || process.env.PORT
const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();

app.use(express.static('Public'));


//Template Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


app.use('/', require('./Routes/index.js'));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})
