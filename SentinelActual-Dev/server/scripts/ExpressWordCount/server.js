const express = require('express');
const bodyParser= require('body-parser');
const fs = require('fs');
const countKeywords = require('./ExtractFunction.js');
const pdfParser = require('./pdftojson.js');
const MongoClient = require('mongodb').MongoClient;
let ObjectID = require('mongodb').ObjectID;
const app = express();
const port = 3000;
const uri = "mongodb+srv://user1:pass@cluster0-sntpd.azure.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
const dir = "./jsons/";
let assessedDocImport;
let assessedDoc;
let keywordList;
let words;
let db;
let file = fs.readdirSync(dir);
// let filePath = fs.readFileSync(dir+file);

MongoClient.connect(uri, (err, database) => {
  if (err) return console.log(err)
  dat = database.db("sentinel");
  dat.collection("keywords").find().toArray(function(err, result) {
    if (err) return err;
    keywordList = result;

    fs.readdir('./jsons/', function(err, files) {
        if (err) {
           console.log(err);
        } else {
          while (files == 0) {
            createJson();
            setTimeout(callCount,2000);
          }
           let readJson = fs.readFileSync('./jsons/'+file, 'utf8');
           let parseJson = JSON.parse(readJson);
           words = countKeywords.extractKeywords(parseJson, keywordList);
           console.log(words);
        }
    })
    database.close();
  });
});

function callCount() {
  fs.readFile('./jsons/Lorem Ipsum with a twist.json', 'utf8', function(err, data){
    console.log(err);
    if (err){
      throw err;
    }
    words = countKeywords.extractKeywords(assessedDoc, keywordList);
    console.log(words);
    console.log(data);
    return data;
  });

  assessedDoc = JSON.parse(assessedDocImport);

}

function createJson() {
  pdfParser.PDFtoJSONConverter();
}
