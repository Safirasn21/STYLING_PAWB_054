const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bibitController = require('./controllers/bibitController');
const pupukController = require('./controllers/pupukController');
const methodOverride = require('method-override');

// Middleware method-override untuk menangani PUT dan DELETE
app.use(methodOverride('_method'));


app.use(bodyParser.urlencoded({ extended: true }));

// Routes for Bibit
app.get('/bibit', bibitController.index);
app.post('/bibit', bibitController.create);
app.get('/bibit/edit/:id', bibitController.edit);
app.post('/bibit/edit/:id', bibitController.update);
app.get('/bibit/delete/:id', bibitController.delete);

// Routes for Pupuk
app.get('/pupuk', pupukController.index);
app.post('/pupuk', pupukController.create);
app.get('/pupuk/edit/:id', pupukController.edit);
app.post('/pupuk/edit/:id', pupukController.update);
app.get('/pupuk/delete/:id', pupukController.delete);

// Start the server
app.listen(5000, () => {
    console.log('Server running on http://localhost:4000');
});
