const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env.production') });
const express = require('express');
const app = express();
app.use(express.static('dist'));
console.log(process.env.PORT);
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT} !`))