import styles from "./category.module.scss"
import {Link} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {A11y, Navigation} from "swiper";

const SwiperCategory = () =>{
    const dataCategory = window.dataCategory.category;
    return(
        <section className={styles.categories}>
            <div className="container">
                <h2>Категорії</h2>
                <h3>{window.dataCategory.text}</h3>
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
                        dataCategory?.map((item, index) => {
                            return <SwiperSlide key={index} className={styles.slider}>
                                <Link to={item.link}>
                                    <picture>
                                        <img src={item.img} alt={item.name}/>
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