const express = require('express');
const app =     express();
// Storage for notes
const myNotes = ['HTTP is a protocol', 'Andrew is really cool', 'I like tomatoes'];
// For /css route, use static files inside CSS folder
app.use('/css', express.static('css'));

// render items from array via 'notes' variable on notes.ejs page
app.get('/', (req, res) => {
  res.render('notes.ejs', { notes: myNotes });
});

// Listen on Port 3000
app.listen(3000, function() {console.log(`Web Notes app listening on port 3000!`)});