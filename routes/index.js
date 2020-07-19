let express = require("express");
let router = express.Router();
let passport = require("passport");
let middleware = require("../services/middleware");
let utils = require("../services/utils");
let Listing = require("../models/listing");
let User = require("../models/user");
let { isLoggedIn, isNotLoggedIn, isAdmin, isPartialSignedUp } = middleware; // destructuring assignment

// root route
router.get("/", function (req, res) {
    let featuredListings = [];
    Listing.find({}, function (err, allListings) {
        if (err) {
            console.log(err);
        } else {
            res.render("index/home", { featuredListings: allListings, page: "home" });
        }
    });
});

// contact route
router.get("/contact", function (req, res) {
    res.render("index/contact", { page: "contact" });
});

// about us route
router.get("/about", function (req, res) {
    res.render("index/about", { page: "about" });
});

module.exports = router;