const pdf = require("pdf-parse");
const fs = require("fs");
const dir = "./pdfs/";
const choki = require("chokidar");
let watcher = chokidar.watch(dir,{ignored:/^\./, persistent: true});

watcher.on("change", function(path){
  console.log("Dir", path, "has been changed");
  PDFToJSONConverter();
}


function PDFToJSONConverter() {
  let file = fs.readdirSync(dir);
  let filePath = fs.readFileSync(dir+file);
     pdf(filePath).then(function(data) {
        fs.writeFileSync('./jsons/'+file+'.json', JSON.stringify(data), function(err){
          if(err){
            return err;
          }
        })
        // console.log(data);
    });
}

module.exports = {
  PDFtoJSONConverter: PDFToJSONConverter()
}
