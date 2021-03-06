const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keywords = require('./routes/api/keywords');
const app = express();
const formidable = require('formidable');
const cors = require('cors')
let dir = __dirname + "/uploads";
const fs = require("fs");

//Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

//Cors bypass functionality
app.use(cors());

//Formidable
if (!fs.existsSync(dir)) {
  console.log("Folder Created!");
  fs.mkdirSync(dir);
}
app.get("/s", (req,res) =>{

});
app.get("/", (req, res) => {

    let fileName = fs.readdirSync("./scripts/ExpressWordCount/report/");
    let fileContents = fs.readFileSync("./scripts/ExpressWordCount/report/" + 'report.json');

    res.send(JSON.parse(fileContents));
})

app.post("/", (req, res) => {
    var form = new formidable.IncomingForm();

    form.parse(req);

    form.on('fileBegin', function (name, file){
        file.path = __dirname + '/uploads/' + file.name;
    });

    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);
    });

	form.on("end", function() {

        // res.sendFile(__dirname + "/Uploaded.html");

        res.redirect("http://localhost:3000/FileSubmitted")
    });



});


//Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//Use routes
app.use('/api/keywords', keywords);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
