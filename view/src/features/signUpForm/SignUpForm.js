import React from "react";
import styles from './signUpForm.module.css';

const SignUpForm = () => {
    return (
        <form method="post" className={styles.form}>
            <label htmlFor="username">Enter a username:</label>
            <input type="text" name="username" id="username" required/>
            <label htmlFor="firstName">Enter your first name:</label>
            <input type="text" name="firstName" id="firstName" required/>
            <label htmlFor="lastName">Enter your last name:</label>
            <input type="text" name="lastName" id="lastName" required/>
            <label htmlFor="email">Enter an email:</label>
            <input type="email" name="email" id="email" required/>
            <label htmlFor="password">Enter a password:</label>
            <input type="password" name="password" id="password" required/>
            <label htmlFor="passwordConfirmation">Please retype your password:</label>
            <input type="password" name="passwordConfirmation" id="passwordConfirmaion" required/>
            <label htmlFor="hero">Are you a hero or a villain?</label>
            <select name="hero">
                <option value="hero">Hero</option>
                <option value="villain">Villain</option>
            </select>
            <input type="submit" value="Register" id={styles.submit}/>
        </form>
    )
};

export default SignUpForm;