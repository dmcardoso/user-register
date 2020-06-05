import { injectable, inject } from 'tsyringe';

import ICountriesRepository from '@modules/countries/repositories/ICountriesRepository';

import Country from '../infra/typeorm/entities/Country';

interface IRequest {
    search?: string;
}

@injectable()
class ListCountriesService {
    constructor(
        @inject('CountriesRepository')
        private countriesRepository: ICountriesRepository,
    ) {}

    public async execute({ search }: IRequest): Promise<Country[] | undefined> {
        const countries = await this.countriesRepository.findAll({
            search: search?.toUpperCase(),
        });

        return countries;
    }
}

export default ListCountriesService;
