import express, { Request, Response } from 'express';
import CitiesController from './controllers/CitiesController'

let routes = express.Router()

// Cities Controllers
routes.get('/cities', CitiesController.index)
routes.post('/cities', CitiesController.create)

export default routes;
