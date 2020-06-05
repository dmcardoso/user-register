enum Gender {
    male,
    female,
    other,
}
export default interface ICreateUserDTO {
    name: string;
    email: string;
    password: string;
    confirmpassword?: string;
    gender: Gender;
    phone: string;
    country_id: number;
    cpf: string;
    newsletter: boolean;
}
