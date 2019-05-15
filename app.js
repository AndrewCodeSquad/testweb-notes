const express = require('express');
const app =     express();

app.get('/', function(req, res) {
	res.send('Web Notes');
});






app.listen(3000, function() {console.log(`Web Notes app listening on port 3000!`)})