import React from "react";
import styles from "./loginForm.module.css";

const LoginForm = () => {
    return(
        <form method="post">
            <label htmlFor="username">Enter your username:</label>
            <input type="text" name="username" id="username" required/><br/>
            <label htmlFor="password">Enter your password:</label>
            <input type="password" name="password" id="password" required/><br/>
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default LoginForm;