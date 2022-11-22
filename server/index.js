const express = require('express');
let app = express();
var path = require("path"); //is this needed?

app.use(express.json()) //root, [options]
app.use(express.static('client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


//app.use('/static', express.static(path.join(__dirname, 'public')))