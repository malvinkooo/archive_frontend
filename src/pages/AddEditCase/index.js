import React from "react";

import Header from "../../components/HeaderTitle/index.js";
import MainNav from "../../components/MainNav/index.js";

import styles from "./style.css";

const AddEditCase = () => (
    <>
        <Header />
        <MainNav />

        <main className="page">
            <section className="container padding section-breadcrumbs mt-20">
                <ul className="breadcrumbs">
                    <li className="itm"><a href="#" className="link">Головна</a></li>
                    <li className="itm"><a href="#" className="link">Фонди</a></li>
                    <li className="itm">Додати справу</li>
                </ul>
            </section>
            <section className="section container padding">
                <h3 className="section-title">Додати нову справу</h3>

                <div className="section-wrapper">

                    <div className="form-col">
                        <span className="form-label l-col">Обрати фонд:</span>
                        <div className="select-box r-col">
                            <div className="select">
                                <button className="selected" type="button">Обрати фонд</button>

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

                    <div className="form-col">
                        <span className="form-label l-col">Обрати опис:</span>
                        <div className="select-box r-col">
                            <div className="select">
                                <button className="selected" type="button">Обрати опис</button>

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

                    <label className="input-box form-col">
                        <span className="label l-col">Номер справи:</span>
                        <input className="input r-col" type="text" placeholder="Номер справи" />
                    </label>

                    <label className="input-box form-col">
                        <span className="label l-col">Назва справи:</span>
                        <input className="input r-col" type="text" placeholder="Назва справи" />
                    </label>

                    <div className="form-col">
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
                        <span className="label l-col">Нотатки:</span>
                        <textarea className="input r-col" />
                    </label>

                    <div className="form-col">
                        <span className="form-label l-col">Стан справи:</span>

                        <div className="r-col">
                            <label className="checkbox radio">
                                <input type="radio" name="condition" />
                                <span className="checkmark"></span>
                                <span className="label bold">задовільний</span>
                            </label>
                            <label className="checkbox radio">
                                <input type="radio" name="condition" />
                                <span className="checkmark"></span>
                                <span className="label bold">справа розшита</span>
                            </label>
                            <label className="checkbox radio">
                                <input type="radio" name="condition" />
                                <span className="checkmark"></span>
                                <span className="label bold">потребує реставрації</span>
                            </label>
                        </div>
                    </div>

                    <label className="file-input-box form-col">
                        <span className="label l-col">PDF справи:</span>
                        <span className="filemark r-col"></span>
                        <input className="input" type="file" />
                    </label>

                    <div className="form-col">
                        <span className="form-label l-col">Прив'язка до географічного об'єкту:</span>

                        <div className="r-col">
                            <ul class="tags-list">
                                <li className="itm">Херсонська губернія <button class="del">x</button></li>
                                <li className="itm">Херсонська губернія <button className="del">x</button></li>
                                <li className="itm">Херсонська губернія <button className="del">x</button></li>
                                <li className="itm">Херсонська губернія <button className="del">x</button></li>
                                <li className="itm">Херсонська губернія <button className="del">x</button></li>
                                <li className="itm">Херсонська губернія <button className="del">x</button></li>
                            </ul>

                            <div className="select-box">
                                <div className="select">
                                    <ul className="list">
                                        <li className="itm search"><input type="text" className="input" placeholder="Пошук" /></li>
                                        <li className="itm">Російська імперія (до 1917р.)</li>
                                        <li className="itm">Україна в період 1917-1930рр.</li>
                                        <li className="itm">УРСР до 1991р.</li>
                                        <li className="itm">Україна з 1991р.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <footer className="form-footer search-footer-1">
                        <button type="button" className="btn">Очистити форму</button>
                        <button type="button" className="btn">Додати</button>
                    </footer>
                </div>
            </section>
        </main>
    </>
);

export default AddEditCase;
