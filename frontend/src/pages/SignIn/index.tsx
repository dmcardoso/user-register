import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import facebook from '../../assets/facebook.svg';
import google from '../../assets/google.svg';
import linkedin from '../../assets/linkedin.svg';
import logo from '../../assets/logo.png';
import tweeter from '../../assets/tweeter.svg';
import FillInput from '../../components/ControlledFormComponents/FillInput';
import Form from '../../components/ControlledFormComponents/Form';
import FillButton from '../../components/FillButton';
import OutlineButton from '../../components/OutlineButton';
import { error, loading } from '../../components/Toast';
import useAuth from '../../hooks/useAuth';
import { Container } from './styles';

interface FormValues {
    login: string;
    password: string;
}

const SignIn: React.FC = () => {
    const { signIn } = useAuth();

    const handleSubmit = useCallback(
        async (formValues) => {
            const { hide: loadToast } = loading({
                message: 'Relizando login...',
            });

            try {
                await signIn({
                    email: formValues.login,
                    password: formValues.password,
                });
            } catch (err) {
                error({
                    body: 'Erro ao realizer login!',
                    message: err.response.data.message,
                });
            } finally {
                if (loadToast) loadToast();
            }
        },
        [signIn]
    );

    const formikState = useFormik<FormValues>({
        initialValues: {
            login: '',
            password: '',
        },
        validationSchema: Yup.object().shape({
            login: Yup.string()
                .required('E-mail é obrigatório')
                .email('E-mail inválido!'),
            password: Yup.string().required('Senha é obrigatória!'),
        }),
        onSubmit: handleSubmit,
    });

    return (
        <Container>
            <img src={logo} alt="Logo" />
            <Form formikState={formikState}>
                <FillInput name="login" placeholder="Login" label="Login" />
                <FillInput
                    name="password"
                    placeholder="Senha"
                    type="password"
                    label="Senha"
                />
                <FillButton type="submit">Login</FillButton>
            </Form>
            <a href="/#">ESQUECI MINHA SENHA ❯</a>
            <p>Faça seu login usando</p>
            <nav>
                <img src={facebook} alt="Facebook" />
                <img src={tweeter} alt="Tweeter" />
                <img src={linkedin} alt="LinkedIn" />
                <img src={google} alt="Google" />
            </nav>
            <OutlineButton>
                <Link to="/signup">NÃO TENHO LOGIN</Link>
            </OutlineButton>
            <a href="/#">CENTRAL DE AJUDA</a>
        </Container>
    );
};

export default SignIn;
