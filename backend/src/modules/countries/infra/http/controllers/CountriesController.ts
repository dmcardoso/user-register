import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListCountriesService from '@modules/countries/services/ListCountriesService';

export default class CountriesController {
    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const params = request.query;

        const listCountries = container.resolve(ListCountriesService);

        const countries = await listCountries.execute(params);

        return response.send(countries);
    }
}
