import { container } from 'tsyringe';

import '@modules/users/providers';

import ICountriesRepository from '@modules/countries/repositories/ICountriesRepository';
import CountryRepository from '@modules/countries/infra/typeorm/repositories/CountryRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UserRepository';

container.registerSingleton<ICountriesRepository>(
    'CountriesRepository',
    CountryRepository,
);

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository,
);
