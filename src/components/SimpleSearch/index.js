import React from "react";

import styles from "./style.css";

const SimpleSearch = () => (
    <section class="section container padding">
        <h3 class="section-title">Пошук справи за номером</h3>

        <div class="section-wrapper">
            <div className={styles["wrapper-1"]}>
                <label className={`input-box form-col ${styles.col}`}>
                    <span className="label l-col">Номер фонду:</span>
                    <input className="input r-col" type="text" placeholder="Номер фонду" />
                </label>
                <label className={`input-box form-col ${styles.col}`}>
                    <span className="label l-col">Номер опису:</span>
                    <input className="input r-col" type="text" placeholder="Номер опису" />
                </label>
                <label className={`input-box form-col ${styles.col}`}>
                    <span className="label l-col">Номер справи:</span>
                    <input className="input r-col" type="text" placeholder="Номер справи" />
                </label>
            </div>
            
            <footer className="form-footer">
                <a href="#" className="link mr-10">Розширений пошук</a>
                <button type="button" className="btn">Очистити форму</button>
                <button type="button" className="btn">Шукати</button>
            </footer>
        </div>
    </section>
);

export default SimpleSearch;