import { useFavoritoContext } from 'contextos/Favoritos'
import styles from './Card.module.css'
import iconeFavoritar from './favoritar.png'
import iconeDesfavoritar from './desfavoritar.png'

function Card({id, titulo, capa}) {
    const { favorito, adicionarFavorito } = useFavoritoContext()
    const EhFavorito = favorito.some((fave) => fave.id ===id)
    const icone = !EhFavorito ? iconeFavoritar : iconeDesfavoritar;
    return (
        <div className={styles.container}>
            <link className={styles.link} to={`/${id}`}>
                <img src={capa} alt="Capa do jogo" className={styles.capa}/>
                <h2>{titulo}</h2>
            </link>
            <img src={icone}
            alt='Favoritar filme'
            className={styles.favoritar} 
            onClick={() => {
                adicionarFavorito({ id, titulo, capa })
            }}/>
        </div>
    )
}

export default Card