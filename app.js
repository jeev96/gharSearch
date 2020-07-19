let express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    cookieParser = require("cookie-parser"),
    LocalStrategy = require("passport-local"),
    session = require('express-session'),
    MongoStore = require('connect-mongo')(session),
    User = require("./models/user"),
    flash = require("connect-flash"),
    methodOverride = require("method-override");

// configure dotenv
require('dotenv').config();

let indexRoutes = require("./routes/index");

// assign mongoose promise library and connect to database
mongoose.Promise = global.Promise;

// const databaseUri = process.env.MONGODB_URI || 'mongodb://localhost/ghar_search';
const databaseUri = process.env.MONGODB_URI || 'mongodb://localhost/property_db';

console.log(databaseUri);

mongoose.connect(databaseUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(() => console.log(`Database connected`))
    .catch(err => console.log(`Database connection error: ${err.message}`));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json()); app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));
app.use(cookieParser('secret'));
//require moment
app.locals.moment = require('moment');

// PASSPORT CONFIGURATION
app.use(session({
    secret: "Policy selling business",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.use(flash());
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

// root route
app.use("/", indexRoutes);

app.listen(3000, function () {
    console.log("The server has started!");
});