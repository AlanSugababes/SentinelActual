const chokidar = require("chokidar");
const xPDFtoJSONConverter = require("C:\\Users\\Admin\\Downloads\\SentinelActual-master\\SentinelActual\\SentinelActual-Dev\\server\\scripts\\ExpressWordCount\\pdftojson.js");
let watcher = chokidar.watch("C:/Users/Admin/Downloads/SentinelActual-master/SentinelActual/SentinelActual-Dev/server/uploads", { ignored: /^\./, persistent: true });

//Chokidar watching PDF dir
watcher
    .on("change", function (path) {
        console.log("File", path, "has been changed");
        xPDFtoJSONConverter.PDFtoJSONConverter();
    })
 
    .on("error", function (error) { console.log("Error has occurred", error); });
