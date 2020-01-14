// get, post, put, delete

// Tipos de parâmetros:

// Query params: request.query(Filtros, ordenação, paginação, ...)
// Route params: request.params(Identificar um recurso na alteração ou remoção)
// Body: request.body(Dados para criação ou alteração de um recurso)

// MongoDB (não-relacional)

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js');

const app = express();

mongoose.connect(
  'mongodb+srv://omnistack:omnistack@cluster0-jyth1.mongodb.net/week10?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(express.json());
app.use(routes);

app.listen(3333);
