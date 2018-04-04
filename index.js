var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.get('/',function(req,res){
	res.send("hello this is the heroku server with node application");
})

app.listen(port);