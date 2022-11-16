import styles from "./subscribe.module.scss"

const Subscribe = () => {
    return (
        <section className={styles.subscribe}>
            <div className="container">
                <h2>Дізнайтесь першими про новинки</h2>
                <form action={'#'} className={styles.wrapper}>
                    <label htmlFor="subscribe">
                        <input type="email" id={'subscribe'} className={'form-item'} placeholder={"Ваш e-mail*"} required/>
                    </label>
                    <button className={"button"} type={"submit"}>Підписатись</button>
                    <p>Натиснувши на кнопку "Підписатись", я даю згоду на обробку моїх персональних данних та ознайомлений(а) з умовами конфіденціальності.</p>
                </form>
            </div>
        </section>
    )
}

export default Subscribe;