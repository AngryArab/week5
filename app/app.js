import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';

//fix for path
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

import mongoose from 'mongoose';
//mongoose 
mongoose.connect(MongoURI);
const db = mongoose.connection;
//listene for connection success or error
db.on('open',() => console.log("Connected to mongo db"));
db.on('error',() => console.log(" mongo error"));




// config mongouri and secret
import { MongoURI, Secret } from '../config/config.js';

// import the routes
import indexRouter from './routes/index.route.server.js'


// instiance express
const app = express();



// view engine and ejs
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//app using modules

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname,'/client')));
app.use(express.static(path.join(__dirname,'../public')));
app.use(session({
    secret: Secret,
    saveUninitialized: false, 
    resave: false
}));


// routing
app.use('/', indexRouter);
//app.use('/', movieRouter);

export default app;

