import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import UsersController from '../controllers/UsersController';

const usersRouter = Router();
const usersControllers = new UsersController();

usersRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            password: Joi.string().required(),
            confirmpassword: Joi.ref('password'),
            gender: Joi.string().required(),
            phone: Joi.string().required(),
            country_id: Joi.number().required(),
            cpf: Joi.string().required(),
            newsletter: Joi.boolean().required(),
        },
    }),
    usersControllers.create,
);

export default usersRouter;
