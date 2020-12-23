//Dependencies
require("dotenv").config();
const express = require('express');
const session = require("express-session");
const routes = require('./routes');
// Requiring passport as we've configured it
const passport = require("./config/passport");

//Initialize express
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//Route 'views' to react
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

//Set up PORT
const PORT = process.env.PORT || 3001;
const db = require("./models");

//Declare/define API routes
app.use(routes);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function () {
    app.listen(PORT, () => {
        console.log(`==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
    });
});