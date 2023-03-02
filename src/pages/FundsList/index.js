import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import MainNav from "../../components/MainNav";
import { connect } from "react-redux";
import { setFundsAction } from "../../actions/funds.js";
import { getFunds } from "../../ajax/funds.js";
import { Link } from "react-router-dom";

import styles from "./style.css";


class FundsList extends React.Component {
    constructor(props) {
        super(props);

        const { setFundsProps } = this.props;

        getFunds()
        .then(res => {
            setFundsProps(res.data);
        })
        .catch(err => {
            console.log(err);
        });    
    }

    render() {
        const { list } = this.props;
        console.log(list);
        return (
            <>
                <header>
                    <HeaderTitle/>
                    <MainNav />
                </header>
                
                <main className="main">
                    <section className="container padding mt-20">
                        <h3 className="visually-hidden">Навігаця по сайту</h3>
                        <ul className="breadcrumbs-list">
                            <li className="itm"><Link to="/" className="link">Головна</Link></li>
                            <li className="itm">Фонди</li>
                        </ul>
                    </section>
                    <section className="section container padding">
                        <h1 className="section-title">Список фондів</h1>

                        <div className="two-col">
                            <div className="section-content main-col">
                                <ul className="list-1">
                                    {
                                        list.length ? (
                                            list.map((itm, i) => (
                                                <li className="list-1-itm icon-database" key={i}>
                                                    <Link
                                                        to={`/fund/${itm.id}`}
                                                        className="list-link"
                                                    >
                                                        {itm.name}
                                                    </Link>
                                                        <Link to={`/funds/edit/${itm.id}`} className="icon edit"></Link>
                                                        <button className="icon delete"></button>
                                                </li>
                                            ))
                                        ) : (
                                            <div className="text">
                                                <p>Пока ще немає доданих фондів</p>
                                            </div>
                                        )
                                    }
                                </ul>
                            </div>

                            <aside className="aside">
                                <Link 
                                    to="/funds/add"
                                    className={`btn shadow ${styles.btn}`}
                                >
                                    Додати фонд
                                </Link>
                            </aside>
                        </div>
                    </section>
                </main>
            </>
        )
    }

};

const mapStateToProps = store => ({
    list: store.funds.list,
});

const mapDispatchToProps = dispatch => ({
    setFundsProps: list => dispatch(setFundsAction(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FundsList);
