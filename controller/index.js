const {createUser} = require("../db/queries");

exports.createUser = async(req, res) => {
    try {
        const {username, first_name, last_name, primary_email, password, is_hero} = req.body;
        const newUser = await createUser(username, first_name, last_name, primary_email, password, is_hero);

        res.json(newUser.rows[0]);
    } catch(err) {
        console.error(err.message);
    }
} 

