import Banner from 'components/Banner';
import styles from './Favoritos.module.css'
import Titulo from 'components/Titulo';
import Card from 'components/Card';

function Favoritos() {
    return (
        <>
        <Banner imagem='favoritos' />
        <Titulo>
            <h1>Meus favoritos</h1>
        </Titulo>
        <section className={styles.container}>
            <Card id='1' titulo='pedro' capa='https://br.web.img3.acsta.net/medias/nmedia/18/89/67/23/20061404.jpg'/>
        </section>
        </>
    )
}

export default Favoritos;