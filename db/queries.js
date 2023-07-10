const pool = require('./database');

const getUsers = () => {
    return pool.query('SELECT * FROM customers')
};

module.exports = {
    getUsers,
};