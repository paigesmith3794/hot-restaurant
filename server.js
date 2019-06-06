// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 5000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Reservation and Waitlist Data
// =============================================================

var reservations = [
    {
        name: "",
        phoneNumber: 0,
        email: "",
        uniqueID: 0,
    }
];

var waitlist = [
    {
        name: "",
        phoneNumber: 0,
        email: "",
        uniqueID: 0,
    }
];


// Routes
// =============================================================

// Route for reservation
// =============================================================
// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/makereservation", function (req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});

// Displays all reservations
app.get("/api/reservations", function (req, res) {
    return res.json(reservations);
});

// Displays a single reservations, or returns false
app.get("/api/reservations/reservation", function (req, res) {
    var chosen = req.params.reservations;

    console.log(chosen);

    for (var i = 0; i < reservations.length; i++) {
        if (chosen === reservations[i].routeName) {
            return res.json(reservations[i]);
        }
    }

    return res.json(false);
});

// Create New Reservations - takes in JSON input
app.post("/api/reservation", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newreservations = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newreservations.routeName = newreservations.name.replace(/\s+/g, "").toLowerCase();

    console.log(newreservations);

    reservations.push(newreservations);

    res.json(newreservations);
});


// Route for waitlist
// =========================================================
// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/makereservation", function (req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});

// Displays all reservations
app.get("/api/reservations", function (req, res) {
    return res.json(reservations);
});

// Displays a single reservations, or returns false
app.get("/api/reservations/reservation", function (req, res) {
    var chosen = req.params.reservations;

    console.log(chosen);

    for (var i = 0; i < reservations.length; i++) {
        if (chosen === reservations[i].routeName) {
            return res.json(reservations[i]);
        }
    }

    return res.json(false);
});

// Create New Reservations - takes in JSON input
app.post("/api/reservation", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newreservations = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newreservations.routeName = newreservations.name.replace(/\s+/g, "").toLowerCase();

    console.log(newreservations);

    reservations.push(newreservations);

    res.json(newreservations);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});