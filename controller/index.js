const {createUser} = require("../db/queries");

exports.createUser = async(req, res) => {
    try {
        const {username, firstname, lastname, email, password, is_hero} = req.body;
        const newUser = await createUser(username, firstname, lastname, email, password, is_hero);

        resposnse.json(newUser.rows[0]);
    } catch(err) {
        console.error(err.message);
    }
} 