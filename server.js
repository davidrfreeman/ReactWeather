const express = require('express');
const path = require('path');
// Create our app
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  return (req.headers['x-forwarded-proto'] === 'http') ? next() : res.redirect('http://' + req.hostname + req.url);
});

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
