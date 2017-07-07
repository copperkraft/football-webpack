const express = require('express');
const app = express();
const listenSince = require('./listenSince');
const router = require('./infrastructure/router');

router(app);

listenSince(app.get('port') || 3000, app);
