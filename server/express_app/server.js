'use strict';

const express = require('express');

// constants
const PORT = 3080;

// App
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

console.log('current working dir', process.cwd())

app.listen(PORT);

console.log(`Running on http://localhost:${PORT}`);
