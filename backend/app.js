
const express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    LocalStrategy = require("passport-local"),
    cors = require('cors'),
    passportLocalMongoose = 
        require("passport-local-mongoose")
const User = require("./model/User");
let app = express();

const port = 3000;
mongoose.connect('mongodb://127.0.0.1:27017/auth-app')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("express-session")({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false
}));
// Use the middleware to parse JSON and URL-encoded data
app.use(express.json());  // For parsing application/json
app.use(express.urlencoded({ extended: true }));  // For parsing application/x-www-form-urlencoded

app.use(cors({
  origin: 'http://localhost:4200',  // Allow requests from your Angular app's URL
  methods: 'GET, POST, PUT, DELETE',  // Specify allowed HTTP methods
  allowedHeaders: 'Content-Type, Authorization',  // Allowed headers
  credentials: true  // Allow cookies to be sent with requests
}));


app.use(passport.initialize());
require('./passportConfig')(passport);
// app.use(passport.session());

// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

//=====================
// ROUTES
//=====================

app.post('/signup', require('./routes/signup'));
app.post('/login', require('./routes/login'));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});