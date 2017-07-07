const express = require('express');
const app = express();
const listenSince = require('./listenSince');
const router = require('./infrastructure/router');

router(app);

listenSince(process.env.PORT || 3000, app);
