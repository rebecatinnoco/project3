module.exports = function(app) {
    var inventories = require('../controllers/inventory.controller.js');
    const connectEnsureLogin = require('connect-ensure-login');
    const express = require('express');
    const path = require('path');
    app.use(express.static(__dirname));
    const bodyParser = require('body-parser');
    const passport = require('passport');
    const expressSession = require('express-session');
    app.use(bodyParser.json())

// configuring the database'
require('dotenv').config();
const mongoose = require('mongoose')
const Registration = mongoose.model('Registration');
    app.use(expressSession ({
        secret: 'secret',
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false,
            maxAge: 60000
        }
    }));
    app.use(passport.initialize());
app.use(passport.session());

passport.use(Registration.createStrategy());

passport.serializeUser(Registration.serializeUser());
passport.deserializeUser(Registration.deserializeUser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

    app.post('/api/inventory', inventories.createInventory);
    //app.post('/api/Register', registrations.createRegistration);
    app.get('/api/inventory/:id', inventories.getInventory);
    app.get('/api/inventories', inventories.inventories);
    app.put('/api/inventory', inventories.updateInventory);
    app.delete('/api/inventory/:id', inventories.deleteInventory);
    app.post('/api/initial', (req, res, next) => {
        passport.authenticate('local',
        (err,user,info) => {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.redirect('/api/initial?info=' + info);
            }
    
            req.logIn(user, function(err) {
                if (err) {
                    return next(err);
                }
    
                return res.redirect('/api/');
            });
        }) (req, res, next);
    });
    app.get('/api/initial', 
        (req, res) => res.sendFile('/api/initial',
        { root: __dirname })
    );
    app.get('/',
        connectEnsureLogin.ensureLoggedIn(),
        (req, res) => res.sendFile('/api/home', { root: __dirname})
    );
    app.get('/inventories',
        connectEnsureLogin.ensureLoggedIn(),
        (req, res) => res.sendFile('/api/inventories', { root: __dirname})
    );
    app.get('/user',
        connectEnsureLogin.ensureLoggedIn(),
        (req, res) => res.send({user: req.user})
    );
    app.get('/logout',
        (req, res) => {
            // req.logout(),
            res.sendFile('html/logout.html',
            { root: __dirname }
            )
        });
    
}