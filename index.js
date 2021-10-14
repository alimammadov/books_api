const express = require('express');
const bodyParser = require('body-parser');
const api = require('./src/api');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/api/v1', api);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));