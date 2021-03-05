const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const pacienteController = require('./src/controllers/pacienteController');

// Rotas da home
route.get('/', homeController.index);

// Rotas do paciente
route.get('/pacientes/index', pacienteController.index);
route.post('/pacientes/add', pacienteController.add);
route.get('/pacientes/edit/:id', pacienteController.editIndex);
route.post('/pacientes/edit/:id', pacienteController.edit);
route.get('/pacientes/delete/:id', pacienteController.delete);

module.exports = route;
