const pool = require('./database');

const create = (username, first_name, last_name, email, password, is_hero) => {
    return pool.query('INSERT INTO customers VALUES ($username, $first_name, $last_name, $email, $password, $is_hero', [
        username,
        first_name,
        last_name,
        email,
        password,
        is_hero
    ])
} 