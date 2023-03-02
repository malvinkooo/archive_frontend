import React from "react";
import HeaderTitle from "../../components/HeaderTitle/index.js";
import MainNav from "../../components/MainNav/index.js";
import ConfirmModal from "../../components/ConfirmModal/index.js";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { addFundAction } from "../../actions/funds.js";
import { addFund } from "../../ajax/funds.js";
import styles from "./style.css";

class AddEditFund extends React.Component {
    constructor(props) {
        super();

        this.state = {
            name: "Василевська Ванда Львівна (1905-1964), польська письменниця, громадський діяч",
            number: Date.now(),
            startDate: "1912",
            endDate: "",
            description: 'Рукописи В. Л. Василевської. Романи i повiстi: «Обличчя дня» (1932–1933), «La patrie» («Вiтчизна») (1935).',
            isFieldValid: {
                name: true,
                number: true,
                startDate: true,
            },
            errors: {
                name: {
                    empty: "Поле з назвою фонду має бути заповненим.",
                },
                number: {
                    empty: "Поле з номером фонду має бути заповненим.",
                },
                startDate: {
                    empty: "Поле з початковою датою має бути заповненим.",
                },
                endDate: {},
                description: {}
            },
            fund: null,
            isModalVisible: false,
        };

        console.log(props.fund);

        if(!props.fund & props.match.params.id) {

        }

        this.onInputChanged = this.onInputChanged.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.onClearForm = this.onClearForm.bind(this);
        this.onFormSubmited = this.onFormSubmited.bind(this);
        this.modalClosed = this.modalClosed.bind(this);
    }

    componentDidMount() {
        const { fund } = this.props;

        if(fund) {
            this.setState({
                number: fund.number,
                name: fund.name,
                startDate: fund["start_date"],
                endDate: fund["end_date"],
                description: fund.description || "",
                fund,
            });
        }
    }

    onInputChanged(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });

        if(e.target.value.length) {
            this.setState({
                isFieldValid: {
                    ...this.state.isFieldValid,
                    [e.target.name]: true
                }
            });  
        }

        console.log(e.target.value);
    }

    onInputBlur(e) {
        if(e.target.value.length) {
            this.setState({
                isFieldValid: {
                    ...this.state.isFieldValid,
                    [e.target.name]: true
                }
            }); 
        } else {
            this.setState({
                isFieldValid: {
                    ...this.state.isFieldValid,
                    [e.target.name]: false
                }
            }); 
        }     
    }

    onClearForm() {
        this.setState({
            name: "",
            number: "",
            startDate: "",
            endDate: "",
            description: "",
        });
    }

    modalClosed() {
        this.setState({
            isModalVisible: false
        });
    }

    onFormSubmited(e) {
        e.preventDefault();

        const {
            name,
            number,
            startDate,
            endDate,
            description
        } = this.state;

        const fund = {
            name,
            number,
            startDate,
            endDate,
            description
        };

        console.log(fund);

        if(this.state.fund) {
            // edit
        } else {
            addFund(JSON.stringify(fund))
            .then(res => {
                console.log(res);
                this.setState({
                    isModalVisible: true
                });

                // addFundProps
            })
            .catch(err => {
                console.log(err);
            });
        }
    }

    render() {
        const {
            name,
            number,
            startDate,
            endDate,
            description,
            isFieldValid,
            errors,
            isModalVisible
        } = this.state;

        console.log(this);
        return (
            <>
                <header>
                    <HeaderTitle/>
                    <MainNav />
                </header>

                <main className="page">
                    <section className="container padding mt-20">
                        <h3 className="visually-hidden">Навігаця по сайту</h3>
                        <ul className="breadcrumbs-list">
                            <li className="itm"><Link to="/" className="link">Головна</Link></li>
                            <li className="itm">
                                <Link to="/funds" className="link">Фонди</Link>
                            </li>
                            <li className="itm">Додати новий фонд</li>
                        </ul>
                    </section>

                    <section className="section container padding">
                        <h1 className="section-title">Додати фонд</h1>

                        <div className="section-content">
                            <form onSubmit={this.onFormSubmited}>
                                <label className={`input-box form-col ${styles.col}`}>
                                    <span className="label l-col">Номер фонду:</span>
                                    <input
                                        className={`input r-col ${!isFieldValid.number ? "error" : null}`} 
                                        type="text" 
                                        placeholder="Номер фонду"
                                        name="number"
                                        value={number}
                                        onChange={this.onInputChanged}
                                        onBlur={this.onInputBlur}
                                    />
                                    
                                    {!isFieldValid.number ? <span className="notes">{errors.name.empty}</span> : null}

                                </label>
                                <label className={`input-box form-col ${styles.col}`}>
                                    <span className="label l-col">Назва фонду:</span>
                                    <input 
                                        className={`input r-col ${!isFieldValid.name ? "error" : null}`}
                                        type="text"
                                        placeholder="Назва фонду"
                                        name="name"
                                        value={name}
                                        onChange={this.onInputChanged}
                                        onBlur={this.onInputBlur}
                                    />

                                    {!isFieldValid.name ? <span className="notes">{errors.name.empty}</span> : null}

                                </label>
                                <div className={`form-col ${styles.col}`}>
                                    <span className="form-label l-col">Дата або період:</span>
                                    <label className="input-box">
                                        <span className="label">з:</span>
                                        <input 
                                            className={`input ${!isFieldValid.startDate ? "error" : null}`}
                                            type="text"
                                            name="startDate"
                                            value={startDate}
                                            onChange={this.onInputChanged}
                                            onBlur={this.onInputBlur}
                                        />
                                    </label>
                                    <label className={`input-box ml-30`}>
                                        <span className="label">по:</span>
                                        <input
                                            className="input" 
                                            type="text"
                                            name="endDate"
                                            value={endDate}
                                            onChange={this.onInputChanged}
                                        />
                                    </label>

                                    {!isFieldValid.startDate ? <span className="notes">{errors.startDate.empty}</span> : null}
                                </div>
                                <label className={`form-col input-box`}>
                                    <span className="label l-col">Назва фонду:</span>
                                    <textarea 
                                        className="input r-col"
                                        value={description}
                                        name="description"
                                        onChange={this.onInputChanged}
                                    />
                                </label>

                                <footer className="form-footer">
                                    <button 
                                        type="button" 
                                        className="btn"
                                        onClick={this.onClearForm}
                                    >Очистити форму</button>
                                    <button type="submit" className="btn">Додати</button>
                                </footer>
                            </form>
                        </div>
                    </section>
                </main>
                {isModalVisible ? <ConfirmModal 
                    type="message"
                    title="Чудово!"
                    text="Новий фонд був доданий. Перейдіть на сторінку із списком фондів, щоб переглянути."
                    modalClosed={this.modalClosed} /> : null}
            </>
        );
    }
}

const mapStateToProps = (store, props) => {
    const { id } = props.match.params;

    return {
        fund: store.funds.list.find(itm => itm.id === Number.parseInt(id)),
    }
}

const mapDispatchToProps = dispatch => ({
    addFundProps: fund => dispatch(addFundAction(fund)),
    //
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEditFund);