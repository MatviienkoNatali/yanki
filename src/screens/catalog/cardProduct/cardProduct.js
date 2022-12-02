import styles from "./cardProduct.module.scss"
import {Link} from "react-router-dom";

const CardProduct = ({props}) => {
    return(
        <Link className={styles.cardProduct} to={'./'} dataCategory={props.category}>
            {props.sale !==0 &&
                <p className={styles.sale}><span>{props.sale}%</span>sale</p>
            }
            <picture className={styles.picture}>
                <img src={props.img} alt={props.name}/>
            </picture>
            <h3 className={`${props.new ? 'new' : ''}`}>{props.name}</h3>
            {
                props.sale ?
                    <p className={`${styles.priseSale} ${styles.prise}`}>
                        <span>{props.prise} грн</span>
                        <span>{props.prise * (100 - props.sale) / 100} грн</span>
                    </p>
                    : <p className={styles.prise}>{props.prise} грн</p>
            }
            {
                props.size &&
                <p className={styles.size}>{
                    props.size?.map((size, key) =>{
                        return  size.true && <span key={key}>{size.name}</span>
                    })
                }</p>

            }
        </Link>
    )
}
export default CardProduct;