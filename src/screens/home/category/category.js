import styles from "./category.module.scss"
import jackets from "../../../images/categories/jackets.jpeg"
import coat from "../../../images/categories/coat.jpeg"
import furCoats from "../../../images/categories/fur-coats.jpeg"
import parks from "../../../images/categories/parks.jpeg"
import {Link} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {A11y, Navigation} from "swiper";

const SwiperCategory = () =>{

    const category = [
        {
            name: 'Куртки',
            img: jackets,
            link: '',
        },
        {
            name: 'Пальто',
            img: coat,
            link: '',
        },
        {
            name: 'Шуби',
            img: furCoats,
            link: '',
        },
        {
            name: 'Парки',
            img: parks,
            link: '',
        },
    ]
    return(
        <section className={styles.categories}>
            <div className="container">
                <h2>Категорії</h2>
                <Swiper
                    modules={[Navigation, A11y]}
                    spaceBetween={15}
                    slidesPerView={2}
                    navigation
                    loop={true}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {
                        category.map((item, index) => {
                            return <SwiperSlide key={index} className={styles.slider}>
                                <Link to={item.link}>
                                    <picture>
                                        <img src={item.img} alt="img"/>
                                    </picture>
                                    <h3>{item.name}</h3>
                                </Link>
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}
export default SwiperCategory;