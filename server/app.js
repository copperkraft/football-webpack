const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const listenSince = require('./listenSince');
const router = require('./infrastructure/router');


const app = express();


router(app);

listenSince(process.env.PORT || 3000, app);
