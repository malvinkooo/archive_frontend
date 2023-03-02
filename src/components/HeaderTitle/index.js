import React from "react";
import styles from "./style.css";

const HeaderTitle = () => (
    <div className={styles["header-wrapper"]}>
        <div className="container">
            <h2 className={styles.title}>Державний архів</h2>
            <p className={styles.subtitle}>Інформаційно-пошукова система</p>
        </div>
    </div>
);

export default HeaderTitle;
