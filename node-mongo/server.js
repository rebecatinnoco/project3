const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname));
const bodyParser = require('body-parser');
const passport = require('passport');
const expressSession = require('express-session');
//const Registration = mongoose.model('Registration');
app.use(bodyParser.json())
require('./app/models/inventory.model.js')
require('./app/models/Registration.js')



// configuring the database'
require('dotenv').config();
const mongoose = require('mongoose')
const Registration = mongoose.model('Registration');
// conecting to the database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(expressSession ({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 600000
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

const connectEnsureLogin = require('connect-ensure-login');

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

mongoose.connection
.on('open', () => {
    console.log('Mongoose connection open');
})
.on('error', (err) => {
    console.log(`Connection error: ${err.message}`)
});

//for registration
require('./app/routes/index.js')(app);
//for inventories
require('./app/routes/inventory.router.js')(app);
//create a server
const server = app.listen(8080, function () {
    const host = server.address().address
    const port = server.address().port

    console.log("App listening at http://%s:%s", host, port)
})

//REGISTER SOME USERS
// Registration.register({username:'rebeca', active: false}, 'rebeca');
// Registration.register({username:'joy', active: false}, 'joy');
// Registration.register({username:'ray', active: false}, 'ray');