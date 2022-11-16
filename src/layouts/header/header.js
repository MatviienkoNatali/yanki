import styles from "./header.module.scss"
import {Link} from "react-router-dom";
import logoWhite from "../../images/logo-yanki-white.svg"
import logo from "../../images/logo-yanki.svg"
import {useState} from "react";


export const Header = () => {

    const dataHeader = window.dataHeader;
    const[openBurger, setOpenBurger] = useState(false);
    const clickBurger = () =>{
        if(!openBurger){
            setOpenBurger(true);
        }
        else{
            setOpenBurger(false);
        }
    }

    return(
        <header className={`${styles.header} ${openBurger ? styles.open : ''}`}>
            <div className="container">
                <button onClick={clickBurger} className={`${styles.btnBurger} ${openBurger ? styles.open : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul className={`${styles.nav} ${styles.secondNav}`}>
                    {
                        dataHeader.secondNavItem.map((i, index) => {
                            return <li key={index}><Link to={i.link}>{i.name}</Link></li>
                        })
                    }
                </ul>
                <ul className={styles.nav}>
                    {
                        dataHeader.navItem.map((i, index) => {
                            return <li key={index}><Link to={i.link}>{i.name}</Link></li>
                        })
                    }
                </ul>
                <Link className={styles.logo}>
                    <img src={`${openBurger ? logo : logoWhite}`} alt="logo"/>
                </Link>

                <div className={styles.wrapDropDown}>
                    <button className={`arrow-down ${styles.language}`}>UA</button>
                    <button className={`arrow-down ${styles.currency}`}>UAH</button>
                </div>

                <ul className={styles.icons}>
                    {
                        dataHeader.navIcon.map((i, index) => {
                            return <li key={index}><Link to={i.link}>
                                <div  dangerouslySetInnerHTML={{__html:i.icon}} />
                            </Link></li>
                        })
                    }
                </ul>
            </div>
        </header>
    )
}
