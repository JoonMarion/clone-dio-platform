import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import bannerImage from '../../assets/banner.png';
import { Container, Title, TitleHighlight, TextContent } from './styles';

const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <div>
                    <Title>
                        Implemente
                        <br />
                        <TitleHighlight>o seu futuro global agora!</TitleHighlight>
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                        desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>
                    <Button title="Começar agora" variant="secondary" onCLick={() => null} />
                </div>
                <div>
                    <img src={bannerImage} alt="Banner Principal" />
                </div>
            </Container>
        </>
    );
};

export { Home };
