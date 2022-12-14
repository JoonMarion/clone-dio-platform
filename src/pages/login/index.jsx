import { useNavigate } from 'react-router-dom';
import { MdMail, MdLock } from 'react-icons/md';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { api } from '../../services/api';

import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles';

const schema = yup
    .object({
        email: yup.string().email('E-mail inválido. Inclua um "@".').required(),
        password: yup.string().min(8, 'A senha contém no mínimo 8 caracteres.').required(),
    })
    .required();

const Login = () => {
    const navigate = useNavigate();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    console.log(errors);

    const onSubmit = async (formData) => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&password=${formData.password}`);
            if (data.length === 1) {
                navigate('/feed');
            } else {
                alert('E-mail ou senha inválidos.');
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
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                name="email"
                                control={control}
                                errorMessage={errors.email?.message}
                                placeholder="E-mail"
                                type="email"
                                leftIcon={<MdMail />}
                            />
                            <Input
                                name="password"
                                control={control}
                                errorMessage={errors.password?.message}
                                placeholder="Senha"
                                type="password"
                                leftIcon={<MdLock />}
                            />
                            <Button title="Entrar" variant="secondary" type="submit" />
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar Conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
};

export { Login };
