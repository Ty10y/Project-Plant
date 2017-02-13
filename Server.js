var express = require('express');
var execSync = require("child_process").execSync;
var fs = require('fs');
var path = require('path');
var app = express();
var multer = require('multer');
var bodyParser = require('body-parser');
//var upload = multer();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

app.get("/LEDSwitch", function(req, res){
	console.log(req.query)
	try{
	    execSync("python LEDOn.py")
	    LED = req.query.state
	    if (LED == "on") {
		result = execSync("python LEDOn.py")
		console.log(result.toString())
	    } else {
		result = execSync("python LEDOff.py")
		console.log(result.toString())
	    }
	}catch(e){
	    res.status(500).send(e)
	}


	res.send("Hello!\n")
	
});

var server = app.listen(8084, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Media Server running at http://%s:%s', host, port);

});



