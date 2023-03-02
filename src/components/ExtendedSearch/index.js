import React from "react";

import styles from "./style.css";

const ExtendedSearch = () => (
    <section className="section container padding">
        <h3 className="section-title">Розширений пошук</h3>

        <div className="section-wrapper">
            <label className="input-box form-col">
                <span className="label l-col">Шукати текст:</span>
                <input className="input r-col" type="text" placeholder="Шукати текст" />
            </label>

            <div className={`form-col ${styles["wrapper-1"]}`}>
                <span className="form-label l-col">Шукати серед:</span>

                <div className={styles.col}>
                    <label className={`checkbox ${styles.checkbox}`}>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        <span className="label bold">фондів</span>
                    </label>
                    <span className={styles.text}>по:</span>
                    <label className={`checkbox ${styles.checkbox}`}>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        <span className="label">назві</span>
                    </label>
                    <label className={`checkbox ${styles.checkbox}`}>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        <span className="label">аннотації</span>
                    </label>
                </div>

                <div className={styles.col}>
                    <label className={`checkbox ${styles.checkbox}`}>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        <span className="label bold">описів</span>
                    </label>
                </div>

                <div className={styles.col}>
                    <label className={`checkbox ${styles.checkbox}`}>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        <span className="label bold">справ</span>
                    </label>
                    <span className={styles.text}>по:</span>
                    <label className={`checkbox ${styles.checkbox}`}>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        <span className="label">назві</span>
                    </label>
                    <label className={`checkbox ${styles.checkbox}`}>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        <span className="label">аннотації</span>
                    </label>
                </div>
            </div>

            <div className={`form-col ${styles["wrapper-2"]}`}>
                <span className="form-label l-col">Дата або період:</span>
                <label className="input-box">
                    <span className="label">з:</span>
                    <input className="input" type="text" />
                </label>
                <label className={`input-box ml-30`}>
                    <span className="label">по:</span>
                    <input className="input" type="text" />
                </label>
            </div>

            <div className={`form-col ${styles["wrapper-1"]}`}>
                <span className="form-label l-col">Шукати серед:</span>

                <div className={styles.col}>
                    <label className={`checkbox ${styles.checkbox}`}>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        <span className="label bold">фондів</span>
                    </label>
                    <label className={`checkbox ${styles.checkbox}`}>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        <span className="label bold">описів</span>
                    </label>
                    <label className={`checkbox ${styles.checkbox}`}>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        <span className="label bold">справ</span>
                    </label>
                </div>
            </div>

            <div className={`form-col ${styles["wrapper-3"]}`}>
                <span className="form-label l-col">Географія пошуку:</span>

                <div>
                    <div className={`select-box ${styles["select-box"]}`}>
                        <span className="form-label">країна/історичний період:</span>

                        <div className="select">
                            <button className="selected" type="button">Російська імперія (до 1917р.)</button>

                            <ul className="list">
                                <li className="itm search">
                                    <input type="text" className="input" placeholder="Пошук" />
                                </li>
                                <li className="itm">Російська імперія (до 1917р.)</li>
                                <li className="itm">Україна в період 1917-1930рр.</li>
                                <li className="itm">УРСР до 1991р.</li>
                                <li className="itm">Україна з 1991р.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="select-box">
                        <span className="form-label">губернія:</span>

                        <div className="select">
                            <button className="selected" type="button">Херсонська</button>

                            <ul className="list">
                                <li className="itm search">
                                    <input type="text" className="input" placeholder="Пошук" />
                                </li>
                                <li className="itm">Російська імперія (до 1917р.)</li>
                                <li className="itm">Україна в період 1917-1930рр.</li>
                                <li className="itm">УРСР до 1991р.</li>
                                <li className="itm">Україна з 1991р.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="form-footer">
                <a href="#" className="link mr-10">Пошук за реквізитами</a>
                <button type="button" className="btn">Очистити форму</button>
                <button type="button" className="btn">Шукати</button>
            </footer>
        </div>
    </section>
);

export default ExtendedSearch;
