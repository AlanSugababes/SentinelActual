const fs = require('fs');

let extractKeywords = function(assessedPages, keywordList) {

  let extractedText = [];
  const keywordCount = [];

  extractedText = assessedPages.text.split(" ");

  keywordCount.push(
        { Title: assessedPages.info.Title },
        { Total:"totalWordCount", count: extractedText.length });
  for (let targetWord in keywordList) {
    let counter = 0;

    for (let caughtWord in extractedText) {
      if (extractedText[caughtWord] == keywordList[targetWord].word) {
        counter++;
      }
    }
    let tempObject = { word: keywordList[targetWord].word, count: counter };
    keywordCount.push(tempObject);
  }

  fs.writeFileSync('./report/report.json', JSON.stringify(keywordCount), function(err){
    if(err){ return err; }
  })
}

module.exports = {
  extractKeywords: extractKeywords
}
