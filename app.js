const bodyParser = require('body-parser');
const express = require('express');
const app = require('./routes/my_express');
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

require('./routes/express_middleware');

app.get('*', (req, res) => {
    res.send('404 not found. Please refer to links inside the application to navigate.');
});

app.listen(port, () => {
    console.log('Listening on port ' + port);
});
