const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    var today = new Date();
    var day = "";

    var currentDay = today.getDay();

    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            console.log("Error: Day out of range. day = " + currentDay);
            break;
    }

    /*
    if (today.getDay() === 6 || today.getDay() === 0){
        day = "Weekend";
        //res.write("<h1>Yay it's the weekend!</h1>");
        // res.sendFile(__dirname + "/weekend.html");
    } else {
        day = "Weekday";
        // res.sendFile(__dirname + "/weekday.html");
        // res.write("<p>It is not the weekend.</p>");
        // res.write("<h1>Boo! I have to work!</h1>");
        // res.send();

        //res.sendFile(__dirname + "/index.html");
    }
    */
        res.render("list", {kindOfDay: day});
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});