import styles from "./catalog.module.scss";
import CardProduct from "./cardProduct/cardProduct";

const Catalog = () =>{
    const dataCategory = window.dataCategory;
    return(
        <section className={styles.catalog}>
            <div className="container">
                <div className={styles.menu}>home -> catalog</div>
                <div className={styles.sidebar}>
                    <h2>{dataCategory?.catalogTitle}</h2>
                    <ul>
                        {
                            dataCategory?.catalogList?.map((item, key) => {
                                return <li key={key}>{item.name}</li>
                            })
                        }
                    </ul>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.filter}></div>
                    <div className={styles.wrapCards}>
                        { dataCategory?.catalogCards &&
                            dataCategory?.catalogCards?.map((card, id) => {
                                return(
                                    <CardProduct props={{
                                        category: card.category,
                                        name: card.name,
                                        img: card.img,
                                        new: card.new,
                                        sale: card.sale,
                                        prise: card.prise,
                                        size: card.size,
                                    }}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Catalog;