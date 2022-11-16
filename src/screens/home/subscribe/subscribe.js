import styles from "./subscribe.module.scss"

const Subscribe = () => {
    return (
        <section className={styles.subscribe}>
            <div className="container">
                <h2>Узнайте  первым о новинках</h2>
                <form action={'#'} className={styles.wrapper}>
                    <label htmlFor="subscribe">
                        <input type="email" id={'subscribe'} className={'form-item'} placeholder={"Ваш e-mail*"}/>
                    </label>
                    <button className={"button"} type={"submit"}>ПОДПИСАТЬСЯ</button>
                    <p>Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих персональных данных и ознакомлен(а) с условиями конфиденциальности.</p>
                </form>
            </div>
        </section>
    )
}

export default Subscribe;