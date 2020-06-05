import { getRepository, Repository, Like } from 'typeorm';
import Country from '@modules/countries/infra/typeorm/entities/Country';

import ICountriesRepository from '@modules/countries/repositories/ICountriesRepository';
import IFindAllCountriesDTO from '../../../dtos/IFindAllCountriesDTO';

class CountryRepository implements ICountriesRepository {
    private ormRepository: Repository<Country>;

    constructor() {
        this.ormRepository = getRepository(Country);
    }

    public async findById(id: number): Promise<Country | undefined> {
        const country = await this.ormRepository.findOne(id);

        return country;
    }

    public async findAll({
        search,
    }: IFindAllCountriesDTO): Promise<Country[] | undefined> {
        const where = search ? { name: Like(`%${search}%`) } : {};

        const countries = await this.ormRepository.find({
            where,
        });

        return countries;
    }
}

export default CountryRepository;
