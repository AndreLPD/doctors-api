const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const app  =  express();

const fs = require('fs');
const path = require('path');

mongoose.connect(process.env.MONGO_DB_DEV);
const router = require('./src/routes/routes.js');
const req = require('express/lib/request');

app.use(express.json());
app.use('/api', router);


app.listen(process.env.PORT || 3000, () =>
    console.log(`Port: localhost:${process.env.PORT}`)
);
