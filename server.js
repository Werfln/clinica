const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://127.0.0.1:27017/clinica', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
  .then(() => {
    app.emit('pronto');
  })
  .catch(e => console.log(e));

const app = express();
const path = require('path');
const routes = require('./routes');

// Diz onde estar a pasta das views
app.set('views', path.resolve(__dirname, 'src', 'views'));
// Setta a engine como ejs
app.set('view engine', 'ejs');
// Diz onde estar a pasta public
app.use(express.static('public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(routes);

app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});
