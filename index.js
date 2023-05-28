require('dotenv').config();
const PORT = 5000 || process.env.PORT
const express = require('express');

const app = express();

app.get('', (req, res, next) => {
    res.send('Hello World !!');
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})
