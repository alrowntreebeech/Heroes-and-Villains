import React from "react";
import { Link } from "react-router-dom";
import Header from "../../features/header/Header";
import LoginForm from "../../features/logInForm/LogInForm";
import Button from "../../features/buttons/Button";
import styles from "./loginPage.module.css";

const LogInPage = () => {
    return (
        <div className={styles.logInPage}> 
            <Header/>
            <div className={styles.pageBody}>
                <LoginForm/>
                <div className={styles.register}>
                    <p>Don't have an account yet?</p>
                    <p>Register by clicking on the button below!</p>
                    <Link to="/register"><Button buttonName={"Sign Up"}/></Link>
                </div>
            </div>
        </div>
    )
}

export default LogInPage;