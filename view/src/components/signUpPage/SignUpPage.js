import React from "react";
import { Link } from "react-router-dom";
import Header from "../../features/header/Header";
import Button from "../../features/buttons/Button";
import SignUpForm from "../../features/signUpForm/SignUpForm";
import styles from "./signUpPage.module.css";

const SignUpPage = () => {
    return (
        <div className={styles.signUpPage}>
            <Header/>
            <div className={styles.pageBody}>
                <SignUpForm/>
                <div className={styles.login}>
                    <p>Have an account?</p>
                    <p>Sign in by clicking on the button below!</p>
                    <Link to="/login"><Button buttonName={"Log In"} /></Link>
                </div>
            </div>
           
        </div>
    )
};

export default SignUpPage