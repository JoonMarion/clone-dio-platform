import React from 'react';
import { Button } from '../Button/index.jsx';
import logo from '../../assets/logo-dio.png';
import { Container, Row, Wrapper, BuscaInputContainer, Menu, MenuRight, Input } from './styles.js';

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo" />
                    <BuscaInputContainer>
                        <Input placeholder="Buscar..." />
                    </BuscaInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row>
                    <MenuRight href="/">Home</MenuRight>
                    <Button title="Entrar" />
                    <Button title="Cadastrar" />
                </Row>
            </Container>
        </Wrapper>
    );
};

export { Header };
