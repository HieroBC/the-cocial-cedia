const app = require('./routes/my_express');
const port = 3000;

require('./routes/express_middleware');

app.get('*', (req, res) => {
    res.send('404 not found. Please refer to links inside the application to navigate.');
});

app.listen(port, () => {
    console.log('Listening on port ' + port);
});
