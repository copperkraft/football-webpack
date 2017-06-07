const express = require('express');
const app = express();
const listenSince = require('./listenSince');
const router = require('./router');

router(app);

listenSince(3000, app);
