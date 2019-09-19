/* Add all the required libraries*/

/* Connect to your database using mongoose - remember to keep your key secret*/

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');


mongoose.connect(config.db.uri, { useNewUrlParser: true });

var findLibraryWest = function () {
    const XD = Listing.findOne({ name: "Library West" }, function (err, person) {
       
    });

    XD.then((res) => console.log(res));

        /*
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
};
var removeCable = function () {
    const XD = Listing.deleteOne({ code: "CABL" }, function (err, listyBoi) {
        console.log(listyBoi);

    });

  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
};
var updatePhelpsLab = function () {
    Listing.findOneAndUpdate({ name: "Phelps Laboratory" },
        { address: "1953 Museum Rd, Gainesville, FL 32603" }, { new: true },
        function (err, listyBoi) {
            if (err) throw err;
            console.log(listyBoi);
        });


  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
    
    Correct Address: 1953 Museum Rd, Gainesville, FL 32603

   */
};
var retrieveAllListings = function () {
    Listing.find(function (err, listyBoi) {
        if (err) throw err;

        console.log(listyBoi);
    })

  


  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();

function testPause(pause) {
    setTimeout(() => {
        // code that must be executed after the pause
    }, pause);
}


testPause(222222300);