import styles from "./header.module.scss"
import {Link, useLocation} from "react-router-dom";
import logoWhite from "../../images/logo-yanki-white.svg"
import logo from "../../images/logo-yanki.svg"
import {useEffect, useState} from "react";


export const Header = () => {
    const dataHeader = window.dataHeader;
    const path = useLocation();

    const[pathHome, setPathHome] = useState(false);
    const[openBurger, setOpenBurger] = useState(false);
    const clickBurger = () =>{
        if(!openBurger){
            setOpenBurger(true);
        }
        else{
            setOpenBurger(false);
        }
    }
    useEffect(() =>{
        if(path.pathname === '/'){
            setPathHome(true)
        }
    },[path])


    return(
        <header className={`${styles.header} ${openBurger ? styles.open : ''} ${pathHome ? styles.pathHome : '' }`}>
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
                <Link className={styles.logo} to={'/'}>
                    <img src={`${openBurger || !pathHome ? logo : logoWhite}`} alt="logo"/>
                </Link>

                <div className={styles.wrapDropDown}>
                        { dataHeader.language &&
                            <select name={'language'} id={'language'} className={`arrow-down ${styles.language}`}>
                                { dataHeader.language?.map((item, key)=>{
                                    return <option key={key} value={item.name}>{item.name}</option>
                                })}
                            </select>
                        }
                        { dataHeader.currency &&
                            <select name={'currency'} id={'currency'} className={`arrow-down ${styles.currency}`}>
                                { dataHeader.currency?.map((item, key)=>{
                                    return <option key={key} value={item.name}>{item.name}</option>
                                })}
                            </select>
                        }
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
