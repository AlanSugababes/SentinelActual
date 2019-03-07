const express = require('express');
const bodyParser= require('body-parser');
const fileSys = require('fs');
const countKeywords = require('./ExtractFunction.js');
const MongoClient = require('mongodb').MongoClient;
let ObjectID = require('mongodb').ObjectID;
const app = express();
const port = 3000;
const uri = "mongodb+srv://user1:pass@cluster0-sntpd.azure.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
const assessedDocImport = fileSys.readFileSync('./jsons/data.json', 'utf8');
const assessedDoc = JSON.parse(assessedDocImport);
const assessedPages = assessedDoc;
let keywordList;
let words;
let db;

MongoClient.connect(uri, (err, database) => {
  if (err) return console.log(err)
  dat = database.db("sentinel");
  dat.collection("keywords").find().toArray(function(err, result) {
    if (err) return err;
    keywordList = result;
    callCount(assessedPages, keywordList);
    database.close();
  });
});

function callCount(assessedPages, keywordList) {
  words = countKeywords.extractKeywords(assessedPages, keywordList);
  console.log(words);
}
