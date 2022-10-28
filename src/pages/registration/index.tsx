import { MdMail, MdLock, MdAccountBox } from 'react-icons/md';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import {
    Column,
    Container,
    Title,
    TitleRegister,
    Wrapper,
    SubtitleRegister,
    HaveAccount,
    Link,
    SubtitleTerms,
} from './styles';
import { IFormData } from './types';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const schema = yup
    .object({
        name: yup.string().min(8, 'O nome deve contém no mínimo 8 caracteres.').required(),
        email: yup.string().email('E-mail inválido. Inclua um "@".').required(),
        password: yup.string().min(8, 'A senha deve conter no mínimo 8 caracteres.').required(),
    })
    .required();

const Register = () => {
    const navigate = useNavigate();
    const {
        control,
        formState: { errors },
        handleSubmit,
    } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    console.log(errors);

    const onSubmit = async (formData: IFormData) => {
        try {
            const { data } = await api.get(`users?email=${formData.email}`);
            if (data.length === 1) {
                alert('E-mail já cadastrado!');
                return;
            } else {
                await api.post('users', formData);
                navigate('/login');
                alert('Cadastro realizado com sucesso!');
            }
        } catch {
            alert('Houve um erro, tente novamente mais tarde.');
        }
    };

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais
                        rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleRegister>Faça seu cadastro</TitleRegister>
                        <SubtitleRegister>Crie sua conta e make the change._</SubtitleRegister>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                name="name"
                                id="name"
                                control={control}
                                errorMessage={errors.name?.message}
                                placeholder="Nome completo"
                                type="text"
                                leftIcon={<MdAccountBox />}
                            />
                            <Input
                                name="email"
                                id="email"
                                control={control}
                                errorMessage={errors.email?.message}
                                placeholder="E-mail"
                                type="email"
                                leftIcon={<MdMail />}
                            />
                            <Input
                                name="password"
                                id="password"
                                control={control}
                                errorMessage={errors.password?.message}
                                placeholder="Senha"
                                type="password"
                                leftIcon={<MdLock />}
                            />
                            <Button title="Criar minha conta" variant="secondary" type="submit" margin="30px 0" />
                        </form>
                        <SubtitleTerms>
                            Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os
                            Termos de Uso da DIO.
                        </SubtitleTerms>
                        <HaveAccount>
                            Já tenho conta. <Link href="/login">Fazer login</Link>
                        </HaveAccount>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
};

export { Register };
