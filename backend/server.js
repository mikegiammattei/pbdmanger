var http = require('http');
var builder = require('xmlbuilder');
var fs = require('fs');
var parseString = require("xml2js").parseString;
var xml2js = require("xml2js");


/** Create Account Folder */
var dir = 'data';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
dir = 'data/user-1/';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

var xml = builder.create('root')
    .ele('accounts')
    .ele('name','Mike G').up()
    .ele('address', '630 Parson Circle').up()
    .ele('children',{'count': 2})
        .ele('name',{'type': 'id', 'id':1},'sammy').up()
        .ele('name',{'type': 'id', 'id':2},'amy').up()
    .end({ pretty: true});

var dataPath = dir + 'face-sheet.xml';
fs.writeFile(dataPath, xml, function (err) {
    if (err) throw err;
    console.log('Saved!');
});


fs.readFile(dataPath, "utf-8", function(err, data) {
    if (err) console.log(err);
    // we log out the readFile results
    console.log(data);
    // we then pass the data to our method here
    parseString(data, function(err, result) {
        if (err) console.log(err);

        var json = result;
        // here we log the results of our xml string conversion
        console.log(json.root.accounts[0].name = 'Tasha Giammattei');

        var builder = new xml2js.Builder();
        var xml = builder.buildObject(json);

        fs.writeFile("edited-test.xml", xml, function(err, data) {
            if (err) console.log(err);

            console.log("successfully written our update xml to file");
        });
    });
});
http.createServer(function (req, res) {
    fs.readFile(dataPath , function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);

