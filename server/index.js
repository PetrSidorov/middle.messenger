const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env.production') });
const express = require('express');

const app = express();
app.use(express.static('dist'));
app.listen(process.env.PORT);
