import styles from "./hero.module.scss"
import {Link} from "react-router-dom";

const Hero = () =>{
    return(
        <section className={styles.hero}>
            <div className={styles.wrap}>
                <h1>Новая коллекция</h1>
                <Link className={styles.button}>Смотреть Новинки</Link>
            </div>
        </section>
    )
}
export default Hero;