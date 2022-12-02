import styles from "./footer.module.scss"
import {Link} from "react-router-dom";
import {useState} from "react";


export const Footer = () => {
    const dataFooter = window.dataFooter;
    const arrNav = [ dataFooter.navCompany, dataFooter.navBuyer, dataFooter.navUseful, dataFooter.navContact];
    const [openNav, setOpenNav] = useState(false);
    const clickOpenNav = () => {
        if(!openNav){
            setOpenNav(true)
        }
        else{
            setOpenNav(false)
        }
    }

    return(
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.wrap}>
                    {
                        arrNav?.map((e, id) => {
                            return <div key={id} className={`${styles.wrapNav}`}>
                                {e.title ? <h3 onClick={clickOpenNav}>{e?.title}</h3> : null}
                                {e.icons ? <ul className={styles.icons}>
                                        {
                                            e.icons?.map((svg, number)=>{
                                               return <li key={number}>
                                                        <Link to={svg?.link} dangerouslySetInnerHTML={{__html: svg?.iconItem}}/>
                                                      </li>
                                            })
                                        }
                                        </ul> : null}
                                <ul key={id} className={`${styles.nav} ${openNav? styles.open : ''}`}>
                                    {
                                        e.nav?.map((i, index) => {
                                            return <li key={index}><Link to={i?.link}>{i?.name}</Link></li>
                                        })
                                    }
                                </ul>
                            </div>
                        })
                    }
                </div>
                <p className={styles.copyright}>&#169;️ {new Date().getFullYear()} {dataFooter.copyright}</p>
            </div>
        </footer>
    )
}