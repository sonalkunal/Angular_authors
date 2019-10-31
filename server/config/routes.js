const mongoose = require('mongoose');
const AuthorsCtrl = require('./../controllers/AuthorsCtrl.js');

module.exports = (app) => {
    app.get('/api/authors', AuthorsCtrl.index);
    app.get('/api/authors/:id', AuthorsCtrl.show);
    app.post('/api/authors', AuthorsCtrl.create);
    app.put('/api/authors/edit/:id', AuthorsCtrl.edit);
    app.delete('/api/authors/:id', AuthorsCtrl.delete);
    app.all("*", AuthorsCtrl.path);
}
