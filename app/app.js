import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';

//fix for path
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

//auth step 1, import modules
import passport, { deserializeUser } from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';
//auth step 2, define auth strat;

let localStrategy = passportLocal.Strategy;

//auth step 3 imporet user model

import user from './models/user.js';

//auth step 4, importing route

import authRouter from './routes/auth.route.js';

//austh step 5, setup flash

app.use(flash());

//austh step6, intialize passport and session


app.use(passport.initialize());
app.use(passport.session());

//auth step 7, implment auth strat

passport.use(user.createStrategy());

//aith step 8, setup serialization and deselization

passport.serializeUser(user.serializeUser());
passport.deserializeUser(user, deserializeUser());
app.use('/', authRouter);



app.use('/', movierouter)








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

