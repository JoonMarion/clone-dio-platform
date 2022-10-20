import { MdMail, MdLock } from 'react-icons/md';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles';

const schema = yup
    .object({
        email: yup.string().email('E-mail inválido. Inclua um "@".').required(),
        password: yup.string().min(8, 'A sua senha deve conter no mínimo 8 caracteres.').required(),
    })
    .required();

const Login = () => {
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    console.log(isValid, errors);

    const onSubmit = (data) => console.log(data);

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
