const express = require('express');
const cors = require('cors');
const insultRoutes = require('./routes/insultRoutes');

const app = express();

app.use(cors());
app.use('/', insultRoutes);

module.exports = app;