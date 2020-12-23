//Dependencies
const express = require('express');
//const routes = require('./routes');

//Initialize express
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Route "views" to react
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

//Set up PORT
const PORT = process.env.PORT || 3001;

//Declare/define API routes
//app.use(routes);

//Have app listen
app.listen(PORT);