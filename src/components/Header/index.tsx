import React from 'react';
import { Button } from '../Button/index';
import logo from '../../assets/logo-dio.png';
import { Container, Row, Wrapper, BuscaInputContainer, Menu, MenuRight, Input } from './styles';
import { UserPicture } from '../Card/styles';
import { IHeader } from './types';
import { useNavigate, Link } from 'react-router-dom';

const Header = ({ autenticado }: IHeader) => {
    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login');
    };

    const handleClickRegister = () => {
        navigate('/register');
    };

    return (
        <Wrapper>
            <Container>
                <Row>
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                    {autenticado ? (
                        <>
                            <BuscaInputContainer>
                                <Input placeholder="Buscar..." />
                            </BuscaInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/84255348?v=4" />
                    ) : (
                        <>
                            <MenuRight href="/">Home</MenuRight>
                            <Button title="Entrar" onClick={handleClickSignIn} margin="0 10px 0 0" />
                            <Button title="Cadastrar" onClick={handleClickRegister} />
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    );
};

export { Header };
