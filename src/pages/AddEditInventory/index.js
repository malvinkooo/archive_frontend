import React from "react";
import Header from "../../components/HeaderTitle/index.js";
import MainNav from "../../components/MainNav/index.js";

import ConfirmModal from "../../components/ConfirmModal/index.js";

import styles from "./style.css";

const AddEditInventory = () => (
    <>
        <Header />
        <MainNav />
        <main className="page">
            <section className="container padding section-breadcrumbs mt-20">
                <ul className="breadcrumbs">
                    <li className="itm"><a href="#" className="link">Головна</a></li>
                    <li className="itm"><a href="#" className="link">Фонди</a></li>
                    <li className="itm">Додати новий опис</li>
                </ul>
            </section>
            <section className="section container padding">
                <h3 className="section-title">Додати опис</h3>

                <div className="section-wrapper">
                    <label className={`input-box form-col ${styles.col}`}>
                        <span className="label l-col">Номер фонду:</span>
                        <input className="input r-col" type="text" placeholder="Номер фонду" />
                    </label>
                    <label className={`input-box form-col ${styles.col}`}>
                        <span className="label l-col">Назва фонду:</span>
                        <input className="input r-col" type="text" placeholder="Назва фонду" />
                    </label>
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
                    <label className="input-box form-col">
                        <span className="label l-col">Назва фонду:</span>
                        <textarea className="input r-col"></textarea>
                    </label>

                    <footer className="form-footer">
                        <button type="button" className="btn">Очистити форму</button>
                        <button type="button" className="btn">Додати</button>
                    </footer>
                </div>
            </section>
        </main>

        <ConfirmModal />
    </>
);

export default AddEditInventory;