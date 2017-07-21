const express = require('express');
const dotenv = require('dotenv');
const config = require('config');

dotenv.config();

const listenSince = require('./utils/listenSince');
const router = require('./infrastructure/router');

const app = express();

router(app);

listenSince(config.get('port'), app);
