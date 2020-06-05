import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import logo from '../../assets/logo.png';
import Form from '../../components/ControlledFormComponents/Form';
import MaskInput from '../../components/ControlledFormComponents/MaskInput';
import OutlineInput from '../../components/ControlledFormComponents/OutlineInput';
import Radio from '../../components/ControlledFormComponents/Radio';
import Select from '../../components/ControlledFormComponents/Select';
import FillButton from '../../components/FillButton';
import { error, success, loading } from '../../components/Toast';
import api from '../../services/api';
import parseOptions, { SelectValues } from '../../utils/reactSelect';
import { Container, Field } from './styles';

interface FormValues {
    name: string;
    email: string;
    password: string;
    confirmpassword: string;
    gender: SelectValues;
    phone: string;
    country: SelectValues;
    cpf: string;
    newsletter: boolean;
}

const SignUp: React.FC = () => {
    const history = useHistory();

    const loadCountries = useCallback(async (search) => {
        try {
            const response = await api.get('/countries', {
                params: {
                    search,
                },
            });

            if (response && response.data) {
                return parseOptions(response.data, 'name', 'id');
            }
        } catch (err) {
            error({
                message:
                    'Erro ao listar países, por favor tente novamente mais tarde',
            });
        }

        return [];
    }, []);

    const formatValues = useCallback((formValues) => {
        return {
            name: formValues.name,
            email: formValues.email,
            password: formValues.password,
            confirmpassword: formValues.confirmpassword,
            gender: formValues.gender.value,
            phone: formValues.phone,
            country_id: formValues.country.value,
            cpf: formValues.cpf,
            newsletter: formValues.newsletter,
        };
    }, []);

    const handleSubmit = useCallback(
        async (formValues) => {
            const { hide: loadToast } = loading({
                message: 'Salvando usuário...',
            });
            try {
                const submitValues = formatValues(formValues);
                const response = await api.post('/users', submitValues);

                if (response?.data?.user?.id) {
                    success({
                        message: 'Usuário cadastrado com sucesso!',
                    });
                    history.push('/');
                }
            } catch (err) {
                error({
                    body: 'Erro ao cadastrar seu usuário!',
                    message: err.response.data.message,
                });
            } finally {
                if (loadToast) loadToast();
            }
        },
        [formatValues, history]
    );

    const formikState = useFormik<FormValues>({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmpassword: '',
            gender: {},
            phone: '',
            country: {},
            cpf: '',
            newsletter: true,
        },
        validationSchema: Yup.object().shape({
            name: Yup.string()
                .required('Nome é obrigatório')
                .max(255, 'Máximo de 255 caracteres'),
            email: Yup.string()
                .required('E-mail é obrigatório')
                .email('E-mail inválido!')
                .max(255, 'Máximo de 255 caracteres'),
            password: Yup.string()
                .oneOf([Yup.ref('confirmpassword')], 'Senhas devem ser iguais!')
                .min(6, 'Senha deve conter no mínimo 6 dígitos!')
                .required('Senha é obrigatória!'),
            confirmpassword: Yup.string()
                .oneOf([Yup.ref('password')], 'Senhas devem ser iguais!')
                .min(6, 'Confirmação de senha deve conter no mínimo 6 dígitos!')
                .required('Confirmação de senha é obrigatória!'),
            cpf: Yup.string()
                .isCPF('CPF Inválido')
                .required('CPF é obrigatório'),
            gender: Yup.object().shape({
                value: Yup.mixed().required('Gênero é obrigatório!'),
            }),
            phone: Yup.string()
                .isPhone('Telefone inválido')
                .required('Telefone é obrigatório'),
            country: Yup.object().shape({
                value: Yup.mixed().required('País é obrigatório!'),
            }),
            newsletter: Yup.boolean().required(
                'É obrigatório informar se deseja receber nossa newsletter'
            ),
        }),
        onSubmit: handleSubmit,
    });

    return (
        <Container>
            <img src={logo} alt="Logo" />
            <h1>Conclua seu cadastro</h1>
            <h3>
                Preencha o formulário para
                <br /> criar o seu login
            </h3>
            <Form formikState={formikState}>
                <Field>
                    <OutlineInput
                        name="name"
                        placeholder="Nome"
                        label="Nome Completo"
                    />
                </Field>
                <Field>
                    <OutlineInput
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        label="Seu e-mail"
                    />
                </Field>
                <Field>
                    <OutlineInput
                        name="password"
                        placeholder="******"
                        type="password"
                        label="Senha"
                    />
                </Field>
                <Field>
                    <OutlineInput
                        name="confirmpassword"
                        placeholder="Confirmar Senha"
                        type="password"
                        label="Insira novamente sua senha"
                    />
                </Field>
                <Field>
                    <Select
                        name="gender"
                        label="Gênero"
                        isClearable={false}
                        placeholder="Selecione"
                        options={[
                            {
                                label: 'Masculino',
                                value: 'male',
                            },
                            {
                                label: 'Feminino',
                                value: 'female',
                            },
                            {
                                label: 'Outro',
                                value: 'other',
                            },
                        ]}
                    />
                </Field>
                <Field>
                    <MaskInput
                        name="phone"
                        placeholder="Insira seu telefone com DDD"
                        label="Telefone"
                        mask={(value) => {
                            if (value.length < 15) {
                                return [
                                    '(',
                                    /\d/,
                                    /\d/,
                                    ')',
                                    ' ',
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    '-',
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                ];
                            }
                            return [
                                '(',
                                /\d/,
                                /\d/,
                                ')',
                                ' ',
                                /\d/,
                                ' ',
                                /\d/,
                                /\d/,
                                /\d/,
                                /\d/,
                                '-',
                                /\d/,
                                /\d/,
                                /\d/,
                                /\d/,
                            ];
                        }}
                    />
                </Field>
                <Field>
                    <Select
                        name="country"
                        label="País"
                        loadOptions={loadCountries}
                        placeholder="Selecione"
                        isClearable={false}
                        options={[
                            {
                                label: 'Masculino',
                                value: 'M',
                            },
                            {
                                label: 'Feminino',
                                value: 'F',
                            },
                            {
                                label: 'Outro',
                                value: 'O',
                            },
                        ]}
                    />
                </Field>
                <Field>
                    <MaskInput
                        name="cpf"
                        placeholder="Insira o número do CPF"
                        label="Número de CPF"
                        mask={[
                            /\d/,
                            /\d/,
                            /\d/,
                            '.',
                            /\d/,
                            /\d/,
                            /\d/,
                            '.',
                            /\d/,
                            /\d/,
                            /\d/,
                            '-',
                            /\d/,
                            /\d/,
                        ]}
                    />
                </Field>
                <Field>
                    <Radio
                        label="Deseja receber nossa newsletter?"
                        name="newsletter"
                        options={[
                            {
                                label: 'SIM',
                                value: true,
                            },
                            {
                                label: 'NÃO',
                                value: false,
                            },
                        ]}
                    />
                </Field>
                <FillButton type="submit">COMEÇAR</FillButton>
            </Form>
        </Container>
    );
};

export default SignUp;
