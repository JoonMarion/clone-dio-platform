import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { Container, Column, Title, TitleHighlight } from './styles';
import { UserInfo } from '../../components/UserInfo';

const Feed = () => {
    return (
        <>
            <Header autenticado={true} />
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                    <UserInfo
                        percentual={89}
                        nome="João"
                        image="https://avatars.githubusercontent.com/u/84255348?v=4"
                    />
                    <UserInfo
                        percentual={76}
                        nome="Pedro"
                        image="https://avatars.githubusercontent.com/u/84255348?v=4"
                    />
                    <UserInfo
                        percentual={56}
                        nome="Rogério"
                        image="https://avatars.githubusercontent.com/u/84255348?v=4"
                    />
                    <UserInfo
                        percentual={45}
                        nome="Gustavo"
                        image="https://avatars.githubusercontent.com/u/84255348?v=4"
                    />
                    <UserInfo
                        percentual={34}
                        nome="Janilson"
                        image="https://avatars.githubusercontent.com/u/84255348?v=4"
                    />
                </Column>
            </Container>
        </>
    );
};

export { Feed };
