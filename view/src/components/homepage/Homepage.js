import React from "react";
import Header from "../../features/header/Header"; 
import Button from "../../features/buttons/Button";
import styles from "./homepage.module.css";

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <Header/>
            <div className={styles.sign}>
                <p className={styles.introduction}>A shopping website for every hero's or villain's needs.</p>
                <p className={styles.introduction}>Please login or sign-up to browse our website...</p>
                <div className={styles.buttons}>
                    <Button buttonName={"Log In"}/>
                    <Button buttonName={"Sign Up"}/>
                </div>
            </div>
        </div>
    )
};

export default HomePage;