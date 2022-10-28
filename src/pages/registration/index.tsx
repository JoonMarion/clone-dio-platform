import { useNavigate } from 'react-router-dom';
import { MdMail, MdLock, MdAccountBox } from 'react-icons/md';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleRegister, Wrapper } from './styles';
import { IFormData } from './types';

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
    } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    console.log(errors);

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
                        <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                        <form>
                            <Input
                                name="name"
                                control={control}
                                errorMessage={errors.name?.message}
                                placeholder="Nome completo"
                                type="text"
                                leftIcon={<MdAccountBox />}
                            />
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

export { Register };
