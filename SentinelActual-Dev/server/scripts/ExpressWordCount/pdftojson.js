const pdf = require("pdf-parse");
const fs = require("fs");
const dir = "./scripts/ExpressWordCount/pdfs/";

function PDFToJSONConverter() {
  
  let file = fs.readdirSync(dir);
 
  let filePath = fs.readFileSync(dir+file);
 
     pdf(filePath).then(function(data) {
        fs.writeFileSync('./scripts/ExpressWordCount/jsons/file.json', JSON.stringify(data), function(err){
          if(err){
            return err;
          }
        })
        //console.log(data);
    });
}

module.exports = {
  PDFtoJSONConverter: PDFToJSONConverter()
}
