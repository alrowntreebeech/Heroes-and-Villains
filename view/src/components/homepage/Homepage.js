import React from "react";
import Header from "../../features/header/Header"; 
import styles from "./homepage.module.css";

const HomePage = () => {
    return (
        <div>
            <Header/>
            <div className={styles.introduction}>
            </div>
        </div>
    )
};

export default HomePage;