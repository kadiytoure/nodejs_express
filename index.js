let express = require('express');
let app = express();

app.get('/toto', function(req, res) {
    res.send('Yo Toto!');
});

app.use(express.static('welcome'));
app.listen(3000);

app.use(function(req, res, next) {
    res.status(404).redirect("/404.html");
});