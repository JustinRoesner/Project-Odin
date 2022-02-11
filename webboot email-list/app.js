const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { log } = require("console");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");

    

});

// api key
// ef68513441efe8b1761d191d96bd3655-us14

// list id
// c156741e44

app.post("/", function(req, res){
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    console.log(firstName);
    console.log(lastName);
    console.log(email);


    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields:{
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us14.api.mailchimp.com/3.0/lists/c156741e44" 

    const options = {
        method: "POST",
        auth: "justin: ef68513441efe8b1761d191d96bd3655-us14"
    }

    const request = https.request(url, options, function(response){
        if (response.statusCode === 200){
            res.send("Successfully subscribed!");
        } else {
            res.send("Error with signing up");
        }

        response.on("data", function(data){
            console.log(JSON.parse(data));
        });

    });

    request.write(jsonData);
    request.end;


});

// dynamic port for heroku
// process.env.PORT
app.listen(process.env.PORT || 3000, function(){
    console.log("server is running on port 3000");

});