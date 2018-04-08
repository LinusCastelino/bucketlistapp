// We will declare all our dependencies here
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');
const bucketlist = require('./controllers/bucketlist');
const middleware = require('./middleware');

//Connect mongoose to our database
mongoose.connect(config.database);

//Declaring Port
const port = 3000;


//Initialize our app variable
const app = express();

//Middleware for CORS
app.use(cors());

//setting up session with mongo
app.use(session({
    secret: 'foo',
    saveUninitialized : true,
    resave : true,
    store: new MongoStore({mongooseConnection: mongoose.connection,
                          ttl : 2 * 24 * 60 * 60 })
}));

//Middlewares for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



/*express.static is a built in middleware function to serve static files.
 We are telling express server public folder is the place to look for the static files

*/
app.use(express.static(path.join(__dirname, 'public')));

//middleware to implement middleware functions
app.use(middleware);

//Routing all HTTP requests to /api to bucketlist controller
app.use('/api',bucketlist);

//Routing all HTTP request to angular components via index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

//Listen to port 3000
app.listen(port, () => {
	console.log(`Starting the server at port ${port}`);
});
