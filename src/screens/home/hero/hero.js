import styles from "./hero.module.scss"
import {Link} from "react-router-dom";

const Hero = () =>{
    const dataHome = window.dataHome;
    return(
        <section className={styles.hero}>
            <div className={styles.wrap}>
                <h1>{dataHome.title}</h1>
                <Link className={styles.button} to={dataHome?.button?.link}>{dataHome?.button?.name}
                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none">
                        <path d="M3.88906 5L0 1.11094L1.11094 1.90735e-06L6.11094 5L1.11094 10L0 8.88907L3.88906 5Z" fill="white"/>
                    </svg>
                </Link>
            </div>
        </section>
    )
}
export default Hero;