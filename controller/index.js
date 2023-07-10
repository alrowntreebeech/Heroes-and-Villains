const {getUsers} = require("../db/queries");

exports.getUsers = async(req, res) => {
    try {
        const allUsers = await getUsers();


        res.json(allUsers.rows);
    } catch(err) {
        console.error(err.message);
    }
} 

