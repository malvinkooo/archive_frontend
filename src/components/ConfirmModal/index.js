import React from "react";

import styles from "./style.css";

const ConfirmModal = (props) => {
    console.log(props);
    return (
        <div className={styles["modal-wrapper"]}>
            <div className={styles.modal}>
                <button type="button" className={styles.close}>
                    <svg className={styles['i-close']} width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="inherit" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>
                </button>
                <h4 className={styles["modal-title"]}>{props.title}</h4>
                <p className="text">{props.text}</p>
                {props.type === "message" ? (
                    <footer className="form-footer -center">
                        <button type="button" className="btn" onClick={props.modalClosed}>Добре</button>
                    </footer>
                ) : (
                    <footer className="form-footer">
                        <button type="button" className="btn">Закрити</button>
                        <button type="button" className="btn">Підтвердити</button>
                    </footer>
                )}
            </div>
        </div>
    );
};

// openModal = (event) => {
//     document.body.classList.add('modal-open');
//     this.setState({ showModal: true });
//   }
//   hideModal = (event) => {
//     document.body.classList.remove('modal-open');
//     this.setState({ showModal: false });
//   }

export default ConfirmModal;
