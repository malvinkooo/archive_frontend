import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.css";

const MainNav = () => (
    <nav className={styles["main-nav"]}>
        <div className={`container ${styles["wrapper"]}`}>
            <ul className={`${styles["site-nav"]}`}>
                <li>
                    <Link to="/funds" className={`${styles.itm} ${styles.active}`}>Фонди, описи, справи</Link>
                </li>
                <li>
                    <Link to="/geography" className={`${styles.itm}`}>Географія</Link>
                </li>
                <li>
                    <Link to="/" className={`${styles.itm}`}>Пошук</Link>
                </li>
            </ul>
            <ul className={`${styles["user-nav"]}`}>
                <li>
                    <a href="#" className={styles.itm}>Увійти</a>
                </li>
            </ul>
        </div>
    </nav>
);

export default MainNav;