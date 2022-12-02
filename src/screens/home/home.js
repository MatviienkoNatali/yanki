import styles from "./home.module.scss";
import Hero from "./hero/hero";
import SwiperCategory from "./category/category";
import Subscribe from "./subscribe/subscribe";

const Home = () =>{
    return(
        <div className={styles.home}>
            <Hero/>
            <SwiperCategory/>
            <Subscribe/>
        </div>
    )
}
export default Home;