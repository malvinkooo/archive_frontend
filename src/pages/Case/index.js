import React from "react";
import Header from "../../components/HeaderTitle";
import MainNav from "../../components/MainNav";

import styles from "./style.css";

const Case = () => (
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
                <h3 className="section-title">
                    Справа № 1548К "Справ з кадрових питань
                    <p>(1796 - 1802)</p>
                </h3>

                <div className="section-wrapper">
                    <dl className="dl-list-1">
                        <dt className="dt">Стан:</dt>
                        <dd className="dd">задовільний</dd>
                    </dl>

                    <article className={`text ${styles.text}`}>
                        <h3>Нотатки до справи</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint culpa consequatur molestias possimus doloremque pariatur, doloribus odit, tempora labore qui modi exercitationem repellat dolores at vero hic a aperiam asperiores.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem minima quod saepe eveniet id, tempore assumenda asperiores molestias et provident quisquam excepturi dolor quis deserunt sed aperiam quo minus ipsum.</p>
                    </article>

                    <a href="#" className="link icon folder">Переглянути справу</a>
                </div>
            </section>
        </main>
    </>
);

export default Case;
