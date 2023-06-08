import React from "react";
import { Link } from "react-router-dom";
import Header from "../../features/header/Header";
import LoginForm from "../../features/logInForm/LogInForm";
import styles from "./loginPage.module.css";

const LogInPage = () => {
    return (
        <div className={styles.logInPage}> 
            <Header/>
            <LoginForm/>
        </div>
    )
}

export default LogInPage;