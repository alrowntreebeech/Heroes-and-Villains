import React from "react";
import { Link } from "react-router-dom";
import Header from "../../features/header/Header";
import styles from "./signUpPage.module.css";

const SignUpPage = () => {
    return (
        <div className={styles.signUpPage}>
           <Header/>
        </div>
    )
};

export default SignUpPage