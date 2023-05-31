import React from "react";
import { Link } from 'react-router-dom';
import Header from "../../features/header/Header"; 
import Button from "../../features/buttons/Button";
import styles from "./homepage.module.css";

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <Header/>
            <div className={styles.sign}>
                <p className={styles.introduction}>A shopping website for every hero's or villain's needs.</p>
                <p className={styles.introduction}>Please log in or sign up to browse our website...</p>
                <div className={styles.buttons}>
                    <Link to="/login"><Button buttonName={"Log In"}/></Link> 
                    <Link to="/register"><Button buttonName={"Sign Up"}/></Link>
                </div>
            </div> 
        </div>
    )
};

export default HomePage;