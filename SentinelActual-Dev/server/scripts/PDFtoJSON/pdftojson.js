const pdf = require("pdf-parse");
const fs = require("fs");
PDFtoJSONConverter();

function PDFtoJSONConverter(){

    let filePath = fs.readFileSync("C:\\Users\\Admin\\Desktop\\TestingParseer\\pdfs\\test1.pdf")
    pdf(filePath).then(function(data) {
        console.log(data.info);
        console.log(data.metadata);
        console.log(data.text);
    });
}

