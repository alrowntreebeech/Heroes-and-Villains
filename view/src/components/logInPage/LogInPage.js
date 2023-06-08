import React from "react";
import { Link } from "react-router-dom";
import Header from "../../features/header/Header";
import styles from "./loginPage.module.css";

const LogInPage = () => {
    return (
        <div className={styles.logInPage}> 
            <Header/>
        </div>
    )
}

export default LogInPage;