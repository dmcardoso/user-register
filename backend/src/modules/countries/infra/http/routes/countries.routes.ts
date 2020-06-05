import { Router } from 'express';
import CountriesController from '../controllers/CountriesController';

const countriesRouter = Router();
const countriesControllers = new CountriesController();

countriesRouter.get('/', countriesControllers.index);

export default countriesRouter;
