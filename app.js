var  bodyParser = require('body-parser');
var  express = require('express');
var  app = require('./routes/my_express');
var  mongoose = require('mongoose');
const port = 3000;

// app config
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// mongoose config
mongoose.connect('mongodb://localhost:27017/thecocialcedia')
.then(() => {
    console.log('mongodb connected');
})
.catch((e) => {
    console.log('error: ' + e);
});

// app routes import
require('./routes/express_middleware');


// other default routes
app.get('*', (req, res) => {
    res.send('404 not found. Please refer to links inside the application to navigate.');
});

// ---------------------
app.listen(port, () => {
    console.log('Listening on port ' + port);
});
