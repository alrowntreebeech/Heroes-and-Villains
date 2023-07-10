const pool = require('./database');

const createUser = (username, first_name, last_name, email, password, is_hero) => {
    return pool.query('INSERT INTO customers VALUES ($username, $first_name, $last_name, $email, $password, $is_hero) RETURNING *', [
        username,
        first_name,
        last_name,
        email,
        password,
        is_hero
    ])
};

module.exports = {
    createUser,
};