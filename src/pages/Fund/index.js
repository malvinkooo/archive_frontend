import React from "react";
import Header from "../../components/HeaderTitle";
import MainNav from "../../components/MainNav";

import styles from "./style.css";

const Fund = () => (
    <>
        <Header />
        <MainNav />
        <main className="page">
            <section className="container padding section-breadcrumbs mt-20">
                <ul className="breadcrumbs">
                    <li className="itm"><a href="#" className="link">Головна</a></li>
                    <li className="itm"><a href="#" className="link">Фонди</a></li>
                    <li className="itm">Список описів фонду "25145-К"</li>
                </ul>
            </section>
            <section className="section container padding">
                <h3 className="section-title">Список описів фонду "25145-К"</h3>

                <div className="page-two-col">
                    <div className="section-wrapper main-col">
                        <ul className="list-1">
                            <li className="list-1-itm icon-database">
                                <a href="#" className="list-link">
                                    Фонди державних організацій та суспільних організацій
                                    <button className="close-icon"></button>
                                </a>
                            </li>
                            <li className="list-1-itm icon-database">
                                <a href="#" className="list-link">
                                    Фонди з історії України
                                    <button className="close-icon"></button>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <aside className="aside">
                        <button className={`btn shadow ${styles.btn}`} type="button">Додати опис</button>
                    </aside>
                </div>
            </section>
        </main>
    </>
);

export default Fund;