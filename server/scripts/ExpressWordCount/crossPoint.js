const fileSys = require('fs');

const test = require('./ExtractFunction.js');
const assessedDocImport = fileSys.readFileSync('./jsons/data.json', 'utf8');
const assessedDoc = JSON.parse(assessedDocImport);
// const assessedPages = assessedDoc.formImage.Pages;
// const assessedTexts = assessedDoc.formImage.Pages[0].Texts;
const assessedPages = assessedDoc;

const keywordsImport = fileSys.readFileSync('keywords.json', 'utf8');
const keywordList = JSON.parse(keywordsImport);

let words = test.extractKeywords(assessedPages, keywordList);
console.log(words);
