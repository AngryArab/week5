import express from 'express';

// import passportt 
import passport from 'passport';

// authenticate models
import User from '../views/content/models/user.js';

// import display name from utils
import { UserDisplayName } from '../utils/index.js';

// display fucntions
export function DisplayLoginPage(req, res, next){
    if(!req.user){
        return res.render('index', {title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: UserDisplayName(req) });
    }

    return res.redirect('/movie-list');
}
//exports display register page function

export function DisplayRegisterPage(req, res, next){
    if(!req.user){
        return res.render('index', {title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: UserDisplayName(req)});
    }

    return res.redirect('/movie-list');
}




// Processing Function
export function ProcessLoginPage(req, res, next){
    passport.authenticate('local', function(err, user, info) {
        if(err){
            console.error(err);
            res.end(err);
        }     
        
        if(!user){
            req.flash('loginMessage', 'Authentication error');
            return res.redirect('/login');
        }

        
        req.logIn(user, function(err){
            if(err){
                console.error(err);
                res.end(err);
            }

            return res.redirect('/');

        })
        
    })(req, res, next);
}

export function ProcessRegisterPage(req, res, next){
    let newUser = new User({
        username: req.body.username,
        emailAddress: req.body.emailAddress,
        displayName: req.body.firstName + " " + req.body.lastName
    });

    User.register(newUser, req.body.password, function(err){
        if(err){
            if(err.name == "UserExistsError"){
                console.error('Error: User Already Exists');
                req.flash('registerMessage', 'Registration error')
            } else {
                console.error(err.name);
                req.flash('registerMessage', 'Server Error')
            }
            
            return res.redirect('/register');
        }

        return passport.authenticate('local')(req, res, function()
        {
            return res.redirect('/');
        });
    });
}

export function ProcessLogoutPage(req, res, next){
    req.logOut(function(err){
        if(err){
            console.error(err);
            res.end(err);
        }

        console.log("user logged out");
    });

    res.redirect('/login');
}