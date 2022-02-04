const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){
    var url = "https://api.openweathermap.org/data/2.5/weather?lat=42&lon=-88&appid=51ea624a2af611df16fe1e7bf965f0aa&units=imperial";
    https.get(url, function(response){
        console.log(response.statusCode);
        response.on("data", function(data){
            const weatherData = JSON.parse(data);

            const tempurature = weatherData.main.feels_like;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            console.log("Sycamore:");
            console.log(tempurature);
            console.log(description);
            res.write("<h1>The temp in sycmaore is " + tempurature + "F</h1>");
            res.write("<img src=" + imageURL + " alt='weather icon'>");
            res.write("<p>Outside..." + description + "</p>");
        });
    });
    url = "https://api.openweathermap.org/data/2.5/weather?lat=39&lon=-75&appid=51ea624a2af611df16fe1e7bf965f0aa&units=imperial";
    https.get(url, function(response){
        console.log(response.statusCode);
        response.on("data", function(data){
            const weatherData = JSON.parse(data);

            const tempurature = weatherData.main.feels_like;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            console.log("Phily:");
            console.log(tempurature);
            console.log(description);
            res.write("<h1>The temp in Phily is " + tempurature + "F</h1>");
            res.write("<img src=" + imageURL + " alt='weather icon'>");
            res.write("<p>Outside..." + description + "</p>");
            res.send();
        });
    });
    // res.send("Server is up and running.");
});


app.listen(3000, function() {
    console.log("server is running on port 3000.");
});