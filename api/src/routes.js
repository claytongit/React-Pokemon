const express = require('express');
const routes = express.Router();

const PokeController = require('./controller/PokeController');

routes.get('/pokemon', PokeController.index);
routes.get('/pokemon/:id', PokeController.read);
routes.post('/pokemon', PokeController.store);
routes.put('/pokemon/:id', PokeController.update);
routes.delete('/pokemon/:id', PokeController.del);

module.exports = routes;