import Country from '@modules/countries/infra/typeorm/entities/Country';

import IFindAllCountriesDTO from '../dtos/IFindAllCountriesDTO';

export default interface ICountriesRepository {
    findById(id: number): Promise<Country | undefined>;
    findAll(data: IFindAllCountriesDTO): Promise<Country[] | undefined>;
}
