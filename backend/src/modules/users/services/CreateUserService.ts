import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';

import User from '@modules/users/infra/typeorm/entities/User';

import ICreateUserDTO from '../dtos/ICreateUserDTO';

@injectable()
class CreateUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,

        @inject('HashProvider')
        private hashProvider: IHashProvider,
    ) {}

    public async execute({
        name,
        email,
        password,
        confirmpassword,
        phone,
        gender,
        country_id,
        cpf,
        newsletter,
    }: ICreateUserDTO): Promise<User> {
        const checkUserExists = await this.usersRepository.findByEmail(email);

        if (checkUserExists) {
            throw new AppError('Email address already used');
        }

        if (password !== confirmpassword) {
            throw new AppError("Passwords doesnt't match");
        }

        const hashedPassword = await this.hashProvider.generateHash(password);

        const user = await this.usersRepository.create({
            name,
            email,
            phone,
            gender,
            country_id,
            cpf,
            newsletter,
            password: hashedPassword,
        });

        return user;
    }
}

export default CreateUserService;
