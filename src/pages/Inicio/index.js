import Cabecalho from "components/Cabecalho";
import Banner from "components/Banner";
import Rodape from "components/Rodape";
import Titulo from "components/Titulo";
import Card from "components/Card";

function Inicio() {
    return (
        <>
            <Cabecalho />
            <Banner imagem="home" />
            <Titulo>
                <h1>UM lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <Card id='1' titulo='Gato de botas' capa='https://www.google.com/url?sa=i&url=https%3A%2F%2Foregional.com.br%2Fblog%2Fdetalhes%2Fgato-de-botas-2-o-ultimo-pedido-aposta-nos-classicos-para-resgatar-a-dreamworks&psig=AOvVaw1Jio5XQyVllNZjfRc9CoYY&ust=1705185274457000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICruaj02IMDFQAAAAAdAAAAABAD' />
             <Rodape />
        </>
    )
}

export default Inicio;