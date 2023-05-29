import React from "react";
import styles from "./button.module.css";

const Button = ({buttonName}) => {
    return(
        <button className={styles.button}>{buttonName}</button>
    );
};

export default Button;