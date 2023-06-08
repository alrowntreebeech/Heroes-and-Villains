import React from "react";
import { Link } from "react-router-dom";
import Header from "../../features/header/Header";
import SignUpForm from "../../features/signUpForm/SignUpForm";
import styles from "./signUpPage.module.css";

const SignUpPage = () => {
    return (
        <div className={styles.signUpPage}>
           <Header/>
           <SignUpForm/>
        </div>
    )
};

export default SignUpPage