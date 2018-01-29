const app = require('../my_express');

app.get('/', (req, res) => {
    res.render('index.ejs');
});