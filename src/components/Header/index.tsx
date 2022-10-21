import React from 'react';
import { Button } from '../Button/index';
import logo from '../../assets/logo-dio.png';
import { Container, Row, Wrapper, BuscaInputContainer, Menu, MenuRight, Input } from './styles';
import { UserPicture } from '../Card/styles';
import { IHeader } from './types';

const Header = ({ autenticado }: IHeader) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo" />
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
                            <Button title="Entrar" />
                            <Button title="Cadastrar" />
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    );
};

export { Header };
