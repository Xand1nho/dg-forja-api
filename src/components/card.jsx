import Styles from './Card.module.css'

export const Card = ({name, image, ki}) => {
    return(
        <div className={Styles.cardBackground}>
            <img className={Styles.cardImage} src={image} alt={name}/>
            <h2 className={Styles.cardTitle}>{name}</h2>
            <p className={Styles.cardKi}>{ki}</p>
        </div>
    )
}